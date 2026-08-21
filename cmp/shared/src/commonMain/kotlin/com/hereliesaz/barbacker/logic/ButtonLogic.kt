package com.hereliesaz.barbacker.logic

import com.hereliesaz.barbacker.ADD_BRAND_BUTTON
import com.hereliesaz.barbacker.ADD_TYPE_BUTTON
import com.hereliesaz.barbacker.ADD_WELL_BUTTON
import com.hereliesaz.barbacker.DEFAULT_BUTTONS
import com.hereliesaz.barbacker.LABEL_SEPARATOR
import com.hereliesaz.barbacker.QUANTITY_BUTTONS
import com.hereliesaz.barbacker.model.ButtonConfig

/**
 * Combines the stock grid with a bar's customisations.
 *
 * Defaults come first and customs are appended, with a custom entry
 * replacing a default that shares its id. Order here is only the starting
 * point — [sortButtons] is what decides the rendered order.
 */
fun mergeButtons(custom: List<ButtonConfig>?): List<ButtonConfig> {
    if (custom == null) return DEFAULT_BUTTONS
    val customIds = custom.mapTo(mutableSetOf()) { it.id }
    return DEFAULT_BUTTONS.filterNot { it.id in customIds } + custom
}

/**
 * Resolves a breadcrumb request label back to the top-level button it came
 * from, which is what notification preferences are keyed on.
 *
 * Built once per button-config change; the two maps are the whole point,
 * since this runs for every request on every recomposition of the list.
 */
class ButtonLabelResolver(private val buttons: List<ButtonConfig>) {

    /**
     * Every top-level label and every child label, mapped to the TOP-LEVEL
     * button id. First insert wins, so a label duplicated across two
     * buttons resolves to the earlier-declared one.
     */
    private val labelToTopLevelId: Map<String, String> = buildMap {
        for (button in buttons) {
            putIfAbsent(button.label, button.id)
            for (child in button.children) {
                putIfAbsent(child.label, button.id)
            }
        }
    }

    /** Top-level labels to their position, for the prefix fallback. */
    private val topLevelLabelToIndex: Map<String, Int> = buildMap {
        buttons.forEachIndexed { index, button -> putIfAbsent(button.label, index) }
    }

    /**
     * Returns the owning top-level button id, or null when the label
     * matches nothing.
     *
     * Null is meaningful downstream: an unresolvable label FAILS OPEN in
     * the request filter (it is shown to everyone) rather than being
     * hidden, because a free-text request nobody is subscribed to should
     * still reach the floor.
     */
    fun idForLabel(label: String): String? {
        labelToTopLevelId[label]?.let { return it }

        // Fall back to the breadcrumb's leading segments: "GARNISH: LIMES"
        // resolves through "GARNISH". Cumulative prefixes are tested rather
        // than just the first segment so a nested trail still resolves, and
        // the LOWEST matching top-level index wins.
        var bestIndex: Int? = null
        val segments = label.split(LABEL_SEPARATOR)
        var prefix = ""
        for (segment in segments) {
            prefix = if (prefix.isEmpty()) segment else prefix + LABEL_SEPARATOR + segment
            val index = topLevelLabelToIndex[prefix] ?: continue
            if (bestIndex == null || index < bestIndex) bestIndex = index
        }
        return bestIndex?.let { buttons[it].id }
    }
}

/**
 * Orders a grid context: an explicit manager-defined order if one exists,
 * otherwise most-tapped first.
 *
 * Ids absent from an explicit order sort after those present, so a newly
 * added button appears at the end rather than jumping to the front.
 */
fun sortButtons(
    buttons: List<ButtonConfig>,
    contextId: String,
    customOrders: Map<String, List<String>>,
    buttonUsage: Map<String, Int>,
): List<ButtonConfig> {
    val explicitOrder = customOrders[contextId]
    return if (explicitOrder != null) {
        val position = explicitOrder.withIndex().associate { (i, id) -> id to i }
        buttons.sortedWith { a, b ->
            val pa = position[a.id]
            val pb = position[b.id]
            when {
                pa == null && pb == null -> 0
                pa == null -> 1
                pb == null -> -1
                else -> pa - pb
            }
        }
    } else {
        buttons.sortedByDescending { buttonUsage[it.id] ?: 0 }
    }
}

/**
 * The children a tile actually opens, including sub-menus that exist only
 * at render time and are never stored on the bar document.
 *
 * An empty result means the tile is a leaf and tapping it submits.
 */
fun dynamicChildrenOf(
    button: ButtonConfig,
    wells: List<String>,
    beerInventory: Map<String, List<String>>,
): List<ButtonConfig> = when {
    button.id == "ice" ->
        wells.map { ButtonConfig(id = "well_$it", label = it) } + ADD_WELL_BUTTON

    button.id == "restock_beer" ->
        beerInventory.keys.map { ButtonConfig(id = "brand_$it", label = it) } + ADD_BRAND_BUTTON

    // Brand tiles are keyed by LABEL, not id — the id carries a "brand_"
    // prefix while the inventory map is keyed by the bare brand name.
    button.id.startsWith("brand_") ->
        (beerInventory[button.label] ?: emptyList())
            .map { ButtonConfig(id = "type_${button.label}_$it", label = it) } + ADD_TYPE_BUTTON

    button.id.startsWith("type_") -> QUANTITY_BUTTONS

    else -> button.children
}

/**
 * Joins a navigation trail into the request label that gets written to
 * Firestore, e.g. `"BEER: Corona: Bottle: 12"`.
 *
 * The separator is load-bearing in both directions: [ButtonLabelResolver]
 * splits on it, and the grid's pending highlight is a prefix match against
 * the result.
 */
fun requestLabelFor(trail: List<ButtonConfig>): String =
    trail.joinToString(LABEL_SEPARATOR) { it.label }
