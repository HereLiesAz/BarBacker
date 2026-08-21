package com.hereliesaz.barbacker.model

/**
 * A message in a bar's chat. Replaced the old notices bulletin board: a
 * pinned message is what the dashboard marquee scrolls, unpinned messages
 * are ordinary scrollback.
 *
 * [text] is immutable once posted (enforced by `firestore.rules`).
 */
data class ChatMessage(
    val id: String,
    val text: String,
    val authorId: String,
    val authorName: String,
    /**
     * Author's privilege tier at post time. Blank for messages migrated
     * from the old notices collection, which never captured one.
     */
    val authorRole: String = "",
    val timestamp: Long? = null,
    val pinned: Boolean = false,
    val pinnedBy: String? = null,
    val pinnedAt: Long? = null,
)
