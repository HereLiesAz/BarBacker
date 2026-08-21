package com.hereliesaz.barbacker.model

/** A barred patron. */
data class EightySixEntry(
    val id: String,
    val patronName: String,
    val submittedBy: String,
    val submitterName: String,
    /** Only carried on private entries. */
    val reason: String? = null,
    val visibility: EightySixVisibility = EightySixVisibility.Public,
    val timestamp: Long? = null,
)

enum class EightySixVisibility(val wire: String) {
    /** Visible to every member holding a role. */
    Public("public"),

    /**
     * Manager+ only, and gated on the bar's premium subscription. Non-
     * qualifying readers never fetch these at all — the query itself
     * carries a `visibility == 'public'` constraint rather than filtering
     * client-side, so the reason text never reaches an unauthorised device.
     */
    Private("private");

    companion object {
        fun fromWire(value: String?): EightySixVisibility =
            entries.firstOrNull { it.wire == value } ?: Public
    }
}
