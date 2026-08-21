package com.hereliesaz.barbacker.logic

import com.hereliesaz.barbacker.ADD_BRAND_BUTTON
import com.hereliesaz.barbacker.ADD_TYPE_BUTTON
import com.hereliesaz.barbacker.ADD_WELL_BUTTON
import com.hereliesaz.barbacker.CUSTOM_REQUEST_BUTTON
import com.hereliesaz.barbacker.model.ButtonConfig

/**
 * Moves the element at [from] to [to], sliding everything in between.
 *
 * The web client gets this from dnd-kit's `arrayMove`. Writing it out here
 * keeps the reorder gesture's result testable without a UI toolkit, which
 * matters because the off-by-one directions differ — dragging down lands
 * *after* the target, dragging up lands *before* it — and that is exactly
 * the sort of thing that only shows up as "the button ends up one slot
 * wrong" on a real device.
 *
 * Out-of-range indices return the list unchanged rather than throwing: a
 * drag can outlive the list it started on (a remote snapshot arrives
 * mid-gesture and drops a button), and a crash is a far worse outcome than
 * a reorder that quietly does nothing.
 */
fun <T> List<T>.moveItem(from: Int, to: Int): List<T> {
    if (from == to) return this
    if (from !in indices || to !in indices) return this
    val out = toMutableList()
    out.add(to, out.removeAt(from))
    return out
}

/**
 * Tiles that exist only at render time and must never be written into a
 * saved order.
 *
 * These four are appended by the grid itself rather than read from the bar
 * document, and their position is fixed by the code that synthesises them
 * — [CUSTOM_REQUEST_BUTTON] is pinned last on the main grid, and each
 * `+ ADD …` tile is pinned last in the sub-menu it belongs to. Letting one
 * be dragged would persist an id whose position is then ignored, so the
 * button would visibly snap back on the next snapshot.
 *
 * Not included: `well_*`, `brand_*`, and `type_*` tiles. Those are also
 * synthesised, from the bar's own wells and inventory, but their order is
 * a genuine manager preference and [sortButtons] honours it.
 */
val SYNTHETIC_BUTTON_IDS: Set<String> = setOf(
    CUSTOM_REQUEST_BUTTON.id,
    ADD_WELL_BUTTON.id,
    ADD_BRAND_BUTTON.id,
    ADD_TYPE_BUTTON.id,
)

/** Whether this tile may take part in a drag-to-reorder gesture. */
fun ButtonConfig.isReorderable(): Boolean = id !in SYNTHETIC_BUTTON_IDS

/**
 * The order to persist after a drag, with the render-time tiles stripped.
 *
 * Stripping happens on the way to Firestore rather than before the drag so
 * the on-screen indices the gesture works in stay aligned with what is
 * actually rendered.
 */
fun persistableOrder(buttons: List<ButtonConfig>): List<String> =
    buttons.filter { it.isReorderable() }.map { it.id }
