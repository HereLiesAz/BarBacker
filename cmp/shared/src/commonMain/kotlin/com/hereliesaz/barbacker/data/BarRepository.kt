package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import com.hereliesaz.barbacker.model.Bar
import com.hereliesaz.barbacker.model.BarStatus
import com.hereliesaz.barbacker.model.BarTheme
import com.hereliesaz.barbacker.model.VenueType
import dev.gitlive.firebase.firestore.FieldPath
import dev.gitlive.firebase.firestore.FieldValue
import dev.gitlive.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.serialization.Serializable

/** The fields needed to create a bar that does not exist yet. */
data class NewBar(
    val id: String,
    val name: String,
    val address: String = "",
    val city: String = "",
    val state: String = "",
    val zip: String = "",
    val phone: String = "",
    val status: BarStatus = BarStatus.Verified,
    val type: VenueType = VenueType.Bar,
    val osmId: String? = null,
    val osmType: String? = null,
)

interface BarRepository {
    /**
     * Live bar configuration, or null while no bar is selected.
     *
     * Emits null first, before doing anything else. That ordering is the
     * whole contract: on a bar switch or sign-out the previous bar's
     * config must leave the screen immediately, even if the new
     * subscription then fails with `permission-denied` — which it routinely
     * does for a moment, until the role claim reaches the ID token. Without
     * the leading null, a shared device keeps showing the last bar's data.
     */
    fun barFlow(barId: String?): Flow<Bar?>

    suspend fun getBar(barId: String): Bar?

    /** Returns true if this call created the document, false if it already existed. */
    suspend fun createIfAbsent(bar: NewBar, ownerId: String): Boolean

    suspend fun addBrand(barId: String, brand: String)
    suspend fun addType(barId: String, brand: String, type: String)
    suspend fun addWell(barId: String, well: String)
    suspend fun hideButton(barId: String, buttonId: String)
    suspend fun unhideButton(barId: String, buttonId: String)
    suspend fun saveCustomOrder(barId: String, contextId: String, order: List<String>)
    suspend fun incrementButtonUsage(barId: String, counts: Map<String, Int>)
    suspend fun saveTheme(barId: String, theme: BarTheme)
}

class FirebaseBarRepository(private val firestore: FirebaseFirestore) : BarRepository {

    @Serializable
    private data class BarCreate(
        val name: String,
        val address: String,
        val city: String,
        val state: String,
        val zip: String,
        val phone: String,
        val status: String,
        val type: String,
        val buttons: List<ButtonConfigDto>,
        val ownerId: String,
        val osmId: String? = null,
        val osmType: String? = null,
    )

    @Serializable
    private data class ThemeWrite(
        val primaryColor: String,
        val accentColor: String,
        val logoUrl: String? = null,
        val fontFamily: String? = null,
    )

    override fun barFlow(barId: String?): Flow<Bar?> = flow {
        emit(null)
        if (barId == null) return@flow
        emitAll(
            firestore.document(Paths.bar(barId))
                .snapshots
                .map { it.toBar() },
        )
    }.catch { e ->
        logWarning("Bar listener failed for $barId", e)
        emit(null)
    }

    override suspend fun getBar(barId: String): Bar? =
        firestore.document(Paths.bar(barId)).get().toBar()

    override suspend fun createIfAbsent(bar: NewBar, ownerId: String): Boolean {
        val ref = firestore.document(Paths.bar(bar.id))
        if (ref.get().exists) return false
        ref.set(
            BarCreate(
                name = bar.name,
                address = bar.address,
                city = bar.city,
                state = bar.state,
                zip = bar.zip,
                phone = bar.phone,
                status = bar.status.wire,
                type = bar.type.wire,
                // A new bar starts with no overrides; the client merges in
                // DEFAULT_BUTTONS at read time.
                buttons = emptyList(),
                ownerId = ownerId,
                osmId = bar.osmId,
                osmType = bar.osmType,
            ),
        ) {
            // Omits osmId/osmType when null. The rules use hasOnly(), so
            // writing explicit nulls for a manually created bar would be
            // rejected outright.
            encodeDefaults = false
        }
        return true
    }

    override suspend fun addBrand(barId: String, brand: String) {
        // A merge-set rather than an update: it must create the
        // beerInventory map on a bar that has never had one.
        firestore.document(Paths.bar(barId))
            .set(mapOf(Fields.BEER_INVENTORY to mapOf(brand to emptyList<String>())), merge = true)
    }

    override suspend fun addType(barId: String, brand: String, type: String) {
        // FieldPath with separate segments, never the dotted string
        // "beerInventory.$brand". Firestore splits dotted paths on '.', so
        // a brand like "St. Pauli Girl" would be written into a nested
        // { St: { " Pauli Girl": ... } } instead of the intended key.
        firestore.document(Paths.bar(barId)).updateFields {
            FieldPath(Fields.BEER_INVENTORY, brand) to FieldValue.arrayUnion(type)
        }
    }

    override suspend fun addWell(barId: String, well: String) {
        firestore.document(Paths.bar(barId)).updateFields {
            Fields.WELLS to FieldValue.arrayUnion(well)
        }
    }

    override suspend fun hideButton(barId: String, buttonId: String) {
        firestore.document(Paths.bar(barId)).updateFields {
            Fields.HIDDEN_BUTTON_IDS to FieldValue.arrayUnion(buttonId)
        }
    }

    override suspend fun unhideButton(barId: String, buttonId: String) {
        firestore.document(Paths.bar(barId)).updateFields {
            Fields.HIDDEN_BUTTON_IDS to FieldValue.arrayRemove(buttonId)
        }
    }

    override suspend fun saveCustomOrder(barId: String, contextId: String, order: List<String>) {
        firestore.document(Paths.bar(barId)).updateFields {
            FieldPath(Fields.CUSTOM_ORDERS, contextId) to order
        }
    }

    override suspend fun incrementButtonUsage(barId: String, counts: Map<String, Int>) {
        if (counts.isEmpty()) return
        // One write for the whole buffered batch, using increment() so
        // concurrent bartenders' taps add up instead of overwriting.
        firestore.document(Paths.bar(barId)).updateFields {
            counts.forEach { (buttonId, count) ->
                FieldPath(Fields.BUTTON_USAGE, buttonId) to FieldValue.increment(count)
            }
        }
    }

    override suspend fun saveTheme(barId: String, theme: BarTheme) {
        firestore.document(Paths.bar(barId)).updateFields {
            // The whole `theme` map is replaced, so an absent logoUrl
            // genuinely removes the logo — which is what "Remove" in the
            // editor has to mean. Without this the key would be written as
            // an explicit null, and the two clients would disagree about
            // whether a bar has a logo depending on which one cleared it.
            encodeDefaults = false

            Fields.THEME to ThemeWrite(
                primaryColor = theme.primaryColor,
                accentColor = theme.accentColor,
                logoUrl = theme.logoUrl,
                fontFamily = theme.fontFamily,
            )
        }
    }
}
