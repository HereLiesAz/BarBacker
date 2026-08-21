package com.hereliesaz.barbacker.model

/**
 * A `bars/{barId}` document.
 *
 * Optional collection-valued fields ([beerInventory], [wells],
 * [hiddenButtonIds], [buttonUsage], [customOrders]) are nullable rather
 * than defaulted-to-empty on purpose. The PWA's bar listener only assigns
 * these when the incoming snapshot actually carries them, leaving prior
 * state alone otherwise; collapsing absent to empty here would clear a
 * bar's inventory on any snapshot that happens to omit the field.
 */
data class Bar(
    val id: String,
    val name: String,
    val buttons: List<ButtonConfig>? = null,
    val address: String? = null,
    val city: String? = null,
    val state: String? = null,
    val zip: String? = null,
    val phone: String? = null,
    /**
     * OpenStreetMap identity. `osmId` alone is NOT unique — it is only
     * unique within a given `osmType`, so two unrelated venues can share
     * one. The pair is the key.
     */
    val osmId: String? = null,
    val osmType: String? = null,
    val status: BarStatus = BarStatus.Verified,
    /**
     * Creator's uid. Set once and immutable thereafter (enforced by
     * `firestore.rules`); this is what lets a brand-new bar's creator
     * self-assign Owner, since there is no existing Owner to promote them.
     */
    val ownerId: String? = null,
    val type: VenueType = VenueType.Bar,
    /** Brand name to the list of types stocked for it. */
    val beerInventory: Map<String, List<String>>? = null,
    val wells: List<String>? = null,
    val hiddenButtonIds: List<String>? = null,
    /** Button id to tap count; the default grid sort key. */
    val buttonUsage: Map<String, Int>? = null,
    /** Context id ("main", or a parent button id) to an explicit button order. */
    val customOrders: Map<String, List<String>>? = null,
    val subscription: SubscriptionTier = SubscriptionTier.Free,
    val joinPolicy: JoinPolicy = JoinPolicy.Open,
    val theme: BarTheme? = null,
)

enum class BarStatus(val wire: String) {
    /** Publicly listed. */
    Verified("verified"),
    /** Created ad hoc for a single shift; not surfaced in search. */
    Temporary("temporary");

    companion object {
        fun fromWire(value: String?): BarStatus =
            entries.firstOrNull { it.wire == value } ?: Verified
    }
}

enum class VenueType(val wire: String) {
    Bar("bar"),
    Restaurant("restaurant");

    companion object {
        fun fromWire(value: String?): VenueType =
            entries.firstOrNull { it.wire == value } ?: Bar
    }
}

/**
 * Premium branding. Applied only while the bar is premium — dropping the
 * subscription must revert the UI to stock colours rather than leave the
 * last-paid-for theme in place.
 */
data class BarTheme(
    val primaryColor: String,
    val accentColor: String,
    val logoUrl: String? = null,
    val fontFamily: String? = null,
)
