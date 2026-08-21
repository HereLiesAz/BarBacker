package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.POSConnectionStatus
import com.hereliesaz.barbacker.model.POSMenuItem
import dev.gitlive.firebase.firestore.FirebaseFirestore
import dev.gitlive.firebase.functions.FirebaseFunctions
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable

/** Gross takings over a window, as reported by the connected POS. */
@Serializable
data class POSSales(
    /** Integer cents, so the arithmetic stays exact. */
    val grossCents: Long = 0,
    val orderCount: Int = 0,
)

/**
 * A bar's point-of-sale integration.
 *
 * Every call to a POS vendor happens in a Cloud Function. This client
 * reads two Firestore collections — connection status and the synced menu,
 * both write-denied to clients — and invokes the callables that drive
 * connect, sync, and reporting. Nothing here ever holds a credential: the
 * OAuth tokens live in `posSecrets`, which no client can read.
 */
interface PosRepository {
    fun connectionsFlow(
        barId: String?,
        isManagerPlus: Boolean,
    ): Flow<Map<String, POSConnectionStatus>>

    fun menuFlow(barId: String?, isManagerPlus: Boolean): Flow<List<POSMenuItem>>

    /** Returns the Square URL to open in a browser to authorise. */
    suspend fun squareAuthorizeUrl(barId: String): String

    /**
     * Connects Toast with credentials the merchant pastes in.
     *
     * Toast has no OAuth redirect flow for this integration, so the
     * secret does pass through the client on its way to the function that
     * encrypts and stores it. It is never persisted locally.
     */
    suspend fun connectToast(
        barId: String,
        clientId: String,
        clientSecret: String,
        restaurantGuid: String,
    )

    suspend fun disconnect(barId: String, provider: String)

    /** Returns how many menu items were pulled in. */
    suspend fun syncMenu(barId: String, provider: String): Int

    /** @param start and [end] are ISO 8601 instants. */
    suspend fun getSales(barId: String, provider: String, start: String, end: String): POSSales
}

class FirebasePosRepository(
    private val firestore: FirebaseFirestore,
    private val functions: FirebaseFunctions,
) : PosRepository {

    @Serializable
    private data class BarRequest(val barId: String)

    @Serializable
    private data class ProviderRequest(val barId: String, val provider: String)

    @Serializable
    private data class ToastRequest(
        val barId: String,
        val clientId: String,
        val clientSecret: String,
        val restaurantGuid: String,
    )

    @Serializable
    private data class SalesRequest(
        val barId: String,
        val provider: String,
        val start: String,
        val end: String,
    )

    @Serializable
    private data class AuthorizeUrlResponse(val authorizeUrl: String)

    @Serializable
    private data class SyncResponse(val count: Int = 0)

    override fun connectionsFlow(
        barId: String?,
        isManagerPlus: Boolean,
    ): Flow<Map<String, POSConnectionStatus>> = flow {
        emit(emptyMap())
        if (barId == null || !isManagerPlus) return@flow
        emitAll(
            firestore.collection(Paths.barPosConnection(barId))
                .snapshots
                .map { snapshot ->
                    // The document id IS the provider — there is no
                    // `provider` field to read back.
                    snapshot.documents
                        .mapNotNull { it.toPosConnection(it.id) }
                        .associateBy { it.provider }
                },
        )
    }.catch { e ->
        logWarning("POS connection listener failed for $barId", e)
        emit(emptyMap())
    }

    override fun menuFlow(barId: String?, isManagerPlus: Boolean): Flow<List<POSMenuItem>> = flow {
        emit(emptyList())
        if (barId == null || !isManagerPlus) return@flow
        emitAll(
            firestore.collection(Paths.barMenu(barId))
                .snapshots
                .map { snapshot -> snapshot.documents.mapNotNull { it.toPosMenuItem() } },
        )
    }.catch { e ->
        logWarning("POS menu listener failed for $barId", e)
        emit(emptyList())
    }

    override suspend fun squareAuthorizeUrl(barId: String): String =
        functions.httpsCallable("posGetAuthorizeUrl")
            .invoke(BarRequest(barId))
            .data<AuthorizeUrlResponse>()
            .authorizeUrl

    override suspend fun connectToast(
        barId: String,
        clientId: String,
        clientSecret: String,
        restaurantGuid: String,
    ) {
        functions.httpsCallable("posConnectToast").invoke(
            ToastRequest(
                barId = barId,
                clientId = clientId.trim(),
                clientSecret = clientSecret.trim(),
                restaurantGuid = restaurantGuid.trim(),
            ),
        )
    }

    override suspend fun disconnect(barId: String, provider: String) {
        functions.httpsCallable("posDisconnect").invoke(ProviderRequest(barId, provider))
    }

    override suspend fun syncMenu(barId: String, provider: String): Int =
        functions.httpsCallable("posSyncMenu")
            .invoke(ProviderRequest(barId, provider))
            .data<SyncResponse>()
            .count

    override suspend fun getSales(
        barId: String,
        provider: String,
        start: String,
        end: String,
    ): POSSales = functions.httpsCallable("posGetSales")
        .invoke(SalesRequest(barId, provider, start, end))
        .data<POSSales>()
}
