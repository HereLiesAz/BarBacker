package com.hereliesaz.barbacker.model

/**
 * One tile in the request grid.
 *
 * A button with children opens a sub-menu; a button without children is a
 * leaf that submits a request immediately. Some children are not stored
 * anywhere — they are synthesised at render time from the bar's inventory
 * (see `dynamicChildrenOf`), which is why [children] being empty does not
 * mean the tile is necessarily a leaf.
 */
data class ButtonConfig(
    val id: String,
    val label: String,
    /** Material Symbols icon name. */
    val icon: String? = null,
    /** Marks synthesised tiles ("+ ADD WELL", CUSTOM) so they can be styled apart. */
    val isCustom: Boolean = false,
    val children: List<ButtonConfig> = emptyList(),
    val action: ButtonAction? = null,
)

/**
 * Special-cased taps that open a dialog instead of navigating or
 * submitting.
 */
enum class ButtonAction(val wire: String) {
    AddBrand("add_brand"),
    AddType("add_type"),
    CustomQuantity("custom_qty");

    companion object {
        fun fromWire(value: String?): ButtonAction? =
            entries.firstOrNull { it.wire == value }
    }
}
