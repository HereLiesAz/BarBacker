package com.hereliesaz.barbacker.ui

import androidx.compose.foundation.gestures.awaitEachGesture
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.gestures.scrollBy
import androidx.compose.foundation.lazy.grid.LazyGridItemInfo
import androidx.compose.foundation.lazy.grid.LazyGridState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.PointerEventPass
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.input.pointer.positionChange
import androidx.compose.ui.zIndex
import kotlinx.coroutines.withTimeoutOrNull

/**
 * How long a press has to hold still before it becomes a drag.
 *
 * Matched to the web client's `TouchSensor` activation delay. It is a
 * deliberate trade: shorter and a bartender reaching across the bar sends
 * a page they meant to drag; longer and reordering feels broken.
 */
private const val PICKUP_DELAY_MILLIS = 250L

/** Pixels per frame of auto-scroll while dragging against an edge. */
private const val AUTO_SCROLL_SPEED = 14f

/** How close to an edge the finger has to be before the grid scrolls. */
private const val AUTO_SCROLL_EDGE = 120f

/**
 * Drag-to-reorder for a [androidx.compose.foundation.lazy.grid.LazyVerticalGrid].
 *
 * The gesture is deliberately not built out of `detectDragGesturesAfterLongPress`
 * plus a `clickable` tile. Those two land in the same gesture arena, and
 * which one wins depends on whether the tile's click handler consumed the
 * press first — so the drag either never starts or steals every tap,
 * depending on Compose's version. Watching the **initial** pointer pass
 * instead means this sees the press before the tile does, stays out of the
 * way until the pickup delay elapses, and only then consumes — at which
 * point the tile's own click handler and the grid's scroll both correctly
 * see a cancelled gesture.
 */
@Stable
class GridReorderState internal constructor(internal val gridState: LazyGridState) {

    internal var onMove: (from: Int, to: Int) -> Unit = { _, _ -> }
    internal var onCommit: () -> Unit = {}
    internal var onCancel: () -> Unit = {}
    internal var canReorder: (index: Int) -> Boolean = { true }

    /** The key of the tile being dragged, or null. */
    var draggingKey: Any? by mutableStateOf(null)
        private set

    private var draggingIndex = -1

    /** Where inside the tile the finger landed, so it stays under it. */
    private var grabOffset = Offset.Zero

    /** Whether this drag has actually changed the order. */
    private var moved = false

    /** Pointer position in the grid's own coordinates. */
    private var pointer by mutableStateOf(Offset.Zero)

    internal val isDragging: Boolean get() = draggingKey != null

    internal fun onDragStart(position: Offset) {
        val item = itemAt(position) ?: return
        if (!canReorder(item.index)) return
        draggingKey = item.key
        draggingIndex = item.index
        grabOffset = position - item.offset.toOffset()
        pointer = position
        moved = false
    }

    internal fun onDrag(delta: Offset) {
        if (!isDragging) return
        pointer += delta
        retarget()
    }

    /**
     * Re-checks what the finger is over.
     *
     * Called on every pointer move and on every auto-scroll frame — while
     * the grid scrolls under a stationary finger the tile beneath it keeps
     * changing, and without this the drag would only ever swap when the
     * user also moved.
     */
    internal fun retarget() {
        if (!isDragging) return
        val target = itemAt(pointer) ?: return
        if (target.index == draggingIndex || !canReorder(target.index)) return
        onMove(draggingIndex, target.index)
        draggingIndex = target.index
        moved = true
    }

    internal fun onDragEnd() {
        val changed = moved
        reset()
        if (changed) onCommit()
    }

    /**
     * A cancelled drag must not persist.
     *
     * The reorder has already been applied to the on-screen list as the
     * finger moved, so the caller needs the callback to put it back —
     * otherwise the grid keeps an order nobody saved, and the next remote
     * snapshot would yank it back with no explanation.
     */
    internal fun onDragCancel() {
        val changed = moved
        reset()
        if (changed) onCancel()
    }

    private fun reset() {
        draggingKey = null
        draggingIndex = -1
        moved = false
    }

    /** Draw-phase offset for the tile with [key]; zero for every other tile. */
    internal fun translationFor(key: Any): Offset {
        if (key != draggingKey) return Offset.Zero
        // Read fresh from the layout rather than cached at pickup: the grid
        // can auto-scroll mid-drag, which moves the tile's slot while the
        // finger stays put.
        val info = gridState.layoutInfo.visibleItemsInfo.firstOrNull { it.key == key }
            ?: return Offset.Zero
        return pointer - grabOffset - info.offset.toOffset()
    }

    /** Vertical scroll to apply this frame, or 0 when the finger is clear of the edges. */
    internal fun autoScrollDelta(): Float {
        if (!isDragging) return 0f
        val height = gridState.layoutInfo.viewportSize.height
        if (height <= 0) return 0f
        return when {
            pointer.y < AUTO_SCROLL_EDGE -> -AUTO_SCROLL_SPEED
            pointer.y > height - AUTO_SCROLL_EDGE -> AUTO_SCROLL_SPEED
            else -> 0f
        }
    }

    private fun itemAt(position: Offset): LazyGridItemInfo? =
        gridState.layoutInfo.visibleItemsInfo.firstOrNull { item ->
            position.x >= item.offset.x &&
                position.x <= item.offset.x + item.size.width &&
                position.y >= item.offset.y &&
                position.y <= item.offset.y + item.size.height
        }
}

private fun androidx.compose.ui.unit.IntOffset.toOffset() = Offset(x.toFloat(), y.toFloat())

/**
 * @param onMove applies a swap to the list the grid is rendering. Called
 *   many times per drag, as the finger crosses each tile.
 * @param onCommit persists the order the drag settled on.
 * @param onCancel restores the order from before the drag.
 * @param canReorder whether the item at this index may be picked up or
 *   displaced. The render-time tiles ("+ ADD …", CUSTOM) say no — see
 *   [com.hereliesaz.barbacker.logic.SYNTHETIC_BUTTON_IDS].
 */
@Composable
fun rememberGridReorderState(
    gridState: LazyGridState,
    onMove: (from: Int, to: Int) -> Unit,
    onCommit: () -> Unit,
    onCancel: () -> Unit,
    canReorder: (index: Int) -> Boolean,
): GridReorderState {
    val state = remember(gridState) { GridReorderState(gridState) }

    // The callbacks are re-read through rememberUpdatedState so a drag in
    // flight uses the CURRENT list, not the one captured when the state
    // object was first created.
    val currentOnMove by rememberUpdatedState(onMove)
    val currentOnCommit by rememberUpdatedState(onCommit)
    val currentOnCancel by rememberUpdatedState(onCancel)
    val currentCanReorder by rememberUpdatedState(canReorder)

    state.onMove = { from, to -> currentOnMove(from, to) }
    state.onCommit = { currentOnCommit() }
    state.onCancel = { currentOnCancel() }
    state.canReorder = { index -> currentCanReorder(index) }

    LaunchedEffect(state, state.draggingKey) {
        if (state.draggingKey == null) return@LaunchedEffect
        while (true) {
            val delta = state.autoScrollDelta()
            if (delta != 0f) {
                gridState.scrollBy(delta)
                state.retarget()
            }
            withFrameNanos { }
        }
    }

    return state
}

/** Attaches the pickup gesture. Apply to the grid itself, not to its items. */
fun Modifier.reorderable(state: GridReorderState): Modifier =
    this.pointerInput(state) {
        awaitEachGesture {
            // requireUnconsumed = false, on the initial pass: the tile's
            // own click handler will consume this press, and we still need
            // to see it.
            val down = awaitFirstDown(requireUnconsumed = false, pass = PointerEventPass.Initial)
            val slop = viewConfiguration.touchSlop

            // Timing out is the SUCCESS case here — it means the finger
            // stayed down and still for the whole pickup delay. Any
            // non-null result is a tap or the start of a scroll.
            val abandoned = withTimeoutOrNull(PICKUP_DELAY_MILLIS) {
                while (true) {
                    val event = awaitPointerEvent(PointerEventPass.Initial)
                    val change = event.changes.firstOrNull { it.id == down.id } ?: return@withTimeoutOrNull Unit
                    if (!change.pressed) return@withTimeoutOrNull Unit
                    if ((change.position - down.position).getDistance() > slop) {
                        return@withTimeoutOrNull Unit
                    }
                }
                @Suppress("UNREACHABLE_CODE")
                Unit
            }
            if (abandoned != null) return@awaitEachGesture

            state.onDragStart(down.position)
            if (!state.isDragging) return@awaitEachGesture

            var completed = true
            while (true) {
                val event = awaitPointerEvent(PointerEventPass.Initial)
                val change = event.changes.firstOrNull { it.id == down.id }
                if (change == null) {
                    completed = false
                    break
                }
                if (!change.pressed) {
                    // The release is consumed too. A pickup that never
                    // moved would otherwise still reach the tile's click
                    // handler on the way up, so holding a tile for a
                    // moment and letting go would page the floor.
                    change.consume()
                    break
                }
                state.onDrag(change.positionChange())
                // Consumed in the initial pass so neither the tile's click
                // handler nor the grid's own scroll acts on the same move.
                change.consume()
            }

            if (completed) state.onDragEnd() else state.onDragCancel()
        }
    }

/** Attaches the lift-and-follow rendering. Apply to each item, keyed as the grid keys it. */
fun Modifier.reorderableItem(state: GridReorderState, key: Any): Modifier =
    this.zIndex(if (state.draggingKey == key) 1f else 0f)
        .graphicsLayer {
            val offset = state.translationFor(key)
            translationX = offset.x
            translationY = offset.y
            if (state.draggingKey == key) {
                scaleX = 1.05f
                scaleY = 1.05f
                alpha = 0.9f
            }
        }
