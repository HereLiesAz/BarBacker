package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.ChatMessage
import dev.gitlive.firebase.firestore.Direction
import dev.gitlive.firebase.firestore.FieldValue
import dev.gitlive.firebase.firestore.FirebaseFirestore
import dev.gitlive.firebase.firestore.Timestamp
import dev.gitlive.firebase.firestore.fromMilliseconds
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable

/** How many messages one scrollback page holds. */
const val CHAT_PAGE_SIZE: Int = 50

/** Cap on pinned messages fed to the dashboard marquee. */
const val CHAT_PINNED_LIMIT: Int = 50

interface ChatRepository {
    /**
     * Pinned messages, newest pin first — the dashboard marquee's source.
     *
     * Live whenever a bar is selected, not only while the chat panel is
     * open, because the marquee is on the dashboard.
     */
    fun pinnedFlow(barId: String?): Flow<List<ChatMessage>>

    /**
     * Timestamp of the most recent message, for the unread dot. Zero when
     * there are none.
     *
     * A one-document query rather than reusing the scrollback listener, so
     * the unread badge costs one document instead of fifty while the panel
     * is closed.
     */
    fun latestMessageAtFlow(barId: String?): Flow<Long>

    /**
     * The most recent page of messages, oldest first.
     *
     * Only subscribe while the panel is actually open — [enabled] exists
     * so the caller does not pay for fifty live documents all shift.
     */
    fun scrollbackFlow(barId: String?, enabled: Boolean): Flow<List<ChatMessage>>

    /**
     * One page older than [beforeMillis], oldest first.
     *
     * Pages by timestamp rather than a document cursor, matching the web
     * client. The tradeoff is real: messages sharing an exact boundary
     * timestamp can be skipped. It is preserved rather than "fixed"
     * because both clients must page identically, and server timestamps
     * colliding to the millisecond is vanishingly rare here.
     */
    suspend fun loadOlder(barId: String, beforeMillis: Long): List<ChatMessage>

    /**
     * Posts a message.
     *
     * [authorName] and [authorRole] must be the caller's own values from
     * their membership document — `firestore.rules` compares them against
     * it and rejects anything else, so they cannot be spoofed.
     */
    suspend fun send(
        barId: String,
        text: String,
        authorId: String,
        authorName: String,
        authorRole: String,
        pin: Boolean,
    )

    suspend fun setPinned(barId: String, messageId: String, pinned: Boolean, uid: String)

    suspend fun delete(barId: String, messageId: String)
}

class FirebaseChatRepository(private val firestore: FirebaseFirestore) : ChatRepository {

    @Serializable
    private data class MessageWrite(
        val text: String,
        val authorId: String,
        val authorName: String,
        val authorRole: String,
        val timestamp: Timestamp.ServerTimestamp,
        val pinned: Boolean,
        val pinnedBy: String? = null,
        val pinnedAt: Timestamp.ServerTimestamp? = null,
    )

    override fun pinnedFlow(barId: String?): Flow<List<ChatMessage>> = flow {
        emit(emptyList())
        if (barId == null) return@flow
        emitAll(
            firestore.collection(Paths.barChat(barId))
                .where { Fields.PINNED equalTo true }
                .orderBy(Fields.PINNED_AT, Direction.DESCENDING)
                .limit(CHAT_PINNED_LIMIT)
                .snapshots
                .map { snapshot -> snapshot.documents.mapNotNull { it.toChatMessage() } },
        )
    }.catch { e ->
        logWarning("Pinned chat listener failed for $barId", e)
        emit(emptyList())
    }

    override fun latestMessageAtFlow(barId: String?): Flow<Long> = flow {
        emit(0L)
        if (barId == null) return@flow
        emitAll(
            firestore.collection(Paths.barChat(barId))
                .orderBy(Fields.TIMESTAMP, Direction.DESCENDING)
                .limit(1)
                .snapshots
                .map { snapshot ->
                    snapshot.documents.firstOrNull()?.timestampMillis(Fields.TIMESTAMP) ?: 0L
                },
        )
    }.catch { e ->
        logWarning("Latest-message listener failed for $barId", e)
        emit(0L)
    }

    override fun scrollbackFlow(barId: String?, enabled: Boolean): Flow<List<ChatMessage>> = flow {
        emit(emptyList())
        if (barId == null || !enabled) return@flow
        emitAll(
            firestore.collection(Paths.barChat(barId))
                .orderBy(Fields.TIMESTAMP, Direction.DESCENDING)
                .limit(CHAT_PAGE_SIZE)
                .snapshots
                // Queried newest-first so the limit takes the most recent
                // page, then reversed for display.
                .map { snapshot -> snapshot.documents.mapNotNull { it.toChatMessage() }.reversed() },
        )
    }.catch { e ->
        logWarning("Chat scrollback listener failed for $barId", e)
        emit(emptyList())
    }

    override suspend fun loadOlder(barId: String, beforeMillis: Long): List<ChatMessage> =
        firestore.collection(Paths.barChat(barId))
            .where { Fields.TIMESTAMP lessThan Timestamp.fromMilliseconds(beforeMillis.toDouble()) }
            .orderBy(Fields.TIMESTAMP, Direction.DESCENDING)
            .limit(CHAT_PAGE_SIZE)
            .get()
            .documents
            .mapNotNull { it.toChatMessage() }
            .reversed()

    override suspend fun send(
        barId: String,
        text: String,
        authorId: String,
        authorName: String,
        authorRole: String,
        pin: Boolean,
    ) {
        val trimmed = text.trim()
        if (trimmed.isEmpty()) return
        firestore.collection(Paths.barChat(barId)).add(
            MessageWrite(
                text = trimmed,
                authorId = authorId,
                authorName = authorName,
                authorRole = authorRole,
                timestamp = Timestamp.ServerTimestamp,
                pinned = pin,
                // Written atomically with the message when the composer's
                // pin toggle is armed, so a pinned send never briefly
                // appears unpinned in the marquee.
                pinnedBy = if (pin) authorId else null,
                pinnedAt = if (pin) Timestamp.ServerTimestamp else null,
            ),
        ) {
            // Omits the pin fields entirely on an unpinned message; the
            // create rule's field allowlist tolerates their absence but not
            // a null value.
            encodeDefaults = false
        }
    }

    override suspend fun setPinned(
        barId: String,
        messageId: String,
        pinned: Boolean,
        uid: String,
    ) {
        val ref = firestore.document("${Paths.barChat(barId)}/$messageId")
        if (pinned) {
            ref.updateFields {
                Fields.PINNED to true
                "pinnedBy" to uid
                Fields.PINNED_AT to Timestamp.ServerTimestamp
            }
        } else {
            ref.updateFields {
                Fields.PINNED to false
                // Removed rather than nulled: the marquee query orders by
                // pinnedAt, and a lingering value would keep sorting a
                // message that is no longer pinned.
                "pinnedBy" to FieldValue.delete
                Fields.PINNED_AT to FieldValue.delete
            }
        }
    }

    override suspend fun delete(barId: String, messageId: String) {
        firestore.document("${Paths.barChat(barId)}/$messageId").delete()
    }
}
