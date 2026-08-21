package com.hereliesaz.barbacker.logic

import com.hereliesaz.barbacker.ADD_BRAND_BUTTON
import com.hereliesaz.barbacker.ADD_TYPE_BUTTON
import com.hereliesaz.barbacker.ADD_WELL_BUTTON
import com.hereliesaz.barbacker.CUSTOM_REQUEST_BUTTON
import com.hereliesaz.barbacker.model.ButtonConfig
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class MoveItemTest {

    private val list = listOf("a", "b", "c", "d")

    @Test
    fun moving_forward_lands_after_the_intervening_items() {
        assertEquals(listOf("b", "c", "a", "d"), list.moveItem(from = 0, to = 2))
    }

    @Test
    fun moving_backward_lands_before_the_target() {
        assertEquals(listOf("a", "d", "b", "c"), list.moveItem(from = 3, to = 1))
    }

    @Test
    fun moving_to_the_same_index_is_a_no_op() {
        assertEquals(list, list.moveItem(from = 2, to = 2))
    }

    @Test
    fun moving_to_the_ends_works() {
        assertEquals(listOf("d", "a", "b", "c"), list.moveItem(from = 3, to = 0))
        assertEquals(listOf("b", "c", "d", "a"), list.moveItem(from = 0, to = 3))
    }

    /**
     * A drag can outlive the list it started on — a remote snapshot lands
     * mid-gesture and drops a button. Returning the list unchanged is the
     * only outcome that neither crashes nor silently scrambles the order.
     */
    @Test
    fun out_of_range_indices_leave_the_list_alone() {
        assertEquals(list, list.moveItem(from = -1, to = 2))
        assertEquals(list, list.moveItem(from = 1, to = 9))
        assertEquals(emptyList(), emptyList<String>().moveItem(from = 0, to = 0))
    }
}

class PersistableOrderTest {

    private val real = listOf(
        ButtonConfig(id = "ice", label = "ICE"),
        ButtonConfig(id = "glass", label = "GLASS"),
    )

    @Test
    fun render_time_tiles_are_not_reorderable() {
        assertFalse(CUSTOM_REQUEST_BUTTON.isReorderable())
        assertFalse(ADD_WELL_BUTTON.isReorderable())
        assertFalse(ADD_BRAND_BUTTON.isReorderable())
        assertFalse(ADD_TYPE_BUTTON.isReorderable())
    }

    /**
     * Well, brand, and type tiles are synthesised too, but from the bar's
     * own data — a manager putting the busiest well first is a real
     * preference, and [sortButtons] honours it.
     */
    @Test
    fun tiles_synthesised_from_bar_data_stay_reorderable() {
        assertTrue(ButtonConfig(id = "well_Main", label = "Main").isReorderable())
        assertTrue(ButtonConfig(id = "brand_Corona", label = "Corona").isReorderable())
        assertTrue(ButtonConfig(id = "type_Corona_Bottle", label = "Bottle").isReorderable())
    }

    @Test
    fun the_persisted_order_strips_render_time_tiles() {
        assertEquals(
            listOf("ice", "glass"),
            persistableOrder(real + CUSTOM_REQUEST_BUTTON),
        )
    }

    /**
     * The stripped tile is always last on screen, so removing it must not
     * disturb the surviving order — which is the whole reason stripping
     * happens on the way to Firestore rather than before the gesture.
     */
    @Test
    fun stripping_preserves_the_order_of_what_remains() {
        val dragged = (real + CUSTOM_REQUEST_BUTTON).moveItem(from = 1, to = 0)
        assertEquals(listOf("glass", "ice"), persistableOrder(dragged))
    }
}
