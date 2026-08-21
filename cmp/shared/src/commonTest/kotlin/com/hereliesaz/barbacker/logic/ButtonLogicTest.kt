package com.hereliesaz.barbacker.logic

import com.hereliesaz.barbacker.DEFAULT_BUTTONS
import com.hereliesaz.barbacker.model.ButtonAction
import com.hereliesaz.barbacker.model.ButtonConfig
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

class ButtonLabelResolverTest {

    private val resolver = ButtonLabelResolver(DEFAULT_BUTTONS)

    @Test
    fun resolves_a_top_level_label() {
        assertEquals("ice", resolver.idForLabel("ICE"))
        assertEquals("break", resolver.idForLabel("BREAK"))
    }

    @Test
    fun resolves_a_child_label_to_its_parent() {
        assertEquals("fruit", resolver.idForLabel("LIMES"))
        assertEquals("glass", resolver.idForLabel("PINT"))
    }

    @Test
    fun resolves_a_breadcrumb_via_its_leading_segment() {
        assertEquals("fruit", resolver.idForLabel("GARNISH: LIMES"))
        assertEquals("restock_beer", resolver.idForLabel("BEER: Corona: Bottle: 12"))
    }

    @Test
    fun resolves_a_synthesised_well_breadcrumb() {
        // Well names are user-supplied and appear in no button config, so
        // this can only resolve through the "ICE" prefix.
        assertEquals("ice", resolver.idForLabel("ICE: Well #2"))
    }

    @Test
    fun returns_null_for_free_text() {
        // Null matters downstream: unresolvable labels fail open in the
        // request filter rather than being hidden from everyone.
        assertNull(resolver.idForLabel("someone spilled a drink"))
        assertNull(resolver.idForLabel(""))
    }

    @Test
    fun first_declaration_wins_for_a_duplicated_label() {
        // "MIXERS" is both a top-level button and a child of WELL. The
        // top-level one is declared first, so it wins.
        assertEquals("mixers", resolver.idForLabel("MIXERS"))
    }

    @Test
    fun prefix_fallback_prefers_the_lowest_top_level_index() {
        val buttons = listOf(
            ButtonConfig("first", "A"),
            ButtonConfig("second", "A: B"),
        )
        // "A: B" hits the label map exactly, so it resolves to itself...
        assertEquals("second", ButtonLabelResolver(buttons).idForLabel("A: B"))
        // ...but a deeper trail falls back to the earliest matching prefix.
        assertEquals("first", ButtonLabelResolver(buttons).idForLabel("A: B: C"))
    }

    @Test
    fun break_resolves_exactly_and_not_by_substring() {
        // The request filter grants "break" a bypass past every preference.
        // Free text that merely starts with the same letters must not
        // inherit that bypass.
        assertEquals("break", resolver.idForLabel("BREAK"))
        assertNull(resolver.idForLabel("BREAKAGE AT WELL 3"))
    }
}

class MergeButtonsTest {

    @Test
    fun returns_the_defaults_when_a_bar_has_no_customisations() {
        assertEquals(DEFAULT_BUTTONS, mergeButtons(null))
    }

    @Test
    fun appends_custom_buttons_after_the_defaults() {
        val custom = listOf(ButtonConfig("house_shot", "HOUSE SHOT"))
        val merged = mergeButtons(custom)
        assertEquals(DEFAULT_BUTTONS.size + 1, merged.size)
        assertEquals("house_shot", merged.last().id)
    }

    @Test
    fun a_custom_button_replaces_the_default_sharing_its_id() {
        val custom = listOf(ButtonConfig("ice", "CRUSHED ICE", icon = "severe_cold"))
        val merged = mergeButtons(custom)
        assertEquals(DEFAULT_BUTTONS.size, merged.size)
        assertEquals(1, merged.count { it.id == "ice" })
        assertEquals("CRUSHED ICE", merged.first { it.id == "ice" }.label)
    }
}

class SortButtonsTest {

    private val buttons = listOf(
        ButtonConfig("a", "A"),
        ButtonConfig("b", "B"),
        ButtonConfig("c", "C"),
    )

    @Test
    fun falls_back_to_most_tapped_first() {
        val sorted = sortButtons(
            buttons,
            contextId = "main",
            customOrders = emptyMap(),
            buttonUsage = mapOf("a" to 1, "b" to 9, "c" to 5),
        )
        assertEquals(listOf("b", "c", "a"), sorted.map { it.id })
    }

    @Test
    fun treats_an_untapped_button_as_zero() {
        val sorted = sortButtons(
            buttons,
            contextId = "main",
            customOrders = emptyMap(),
            buttonUsage = mapOf("c" to 3),
        )
        assertEquals("c", sorted.first().id)
    }

    @Test
    fun an_explicit_order_overrides_usage() {
        val sorted = sortButtons(
            buttons,
            contextId = "main",
            customOrders = mapOf("main" to listOf("c", "b", "a")),
            buttonUsage = mapOf("a" to 99),
        )
        assertEquals(listOf("c", "b", "a"), sorted.map { it.id })
    }

    @Test
    fun buttons_missing_from_an_explicit_order_sort_last() {
        // A newly added button must appear at the end rather than jumping
        // to the front of a manager's curated order.
        val sorted = sortButtons(
            buttons,
            contextId = "main",
            customOrders = mapOf("main" to listOf("c", "a")),
            buttonUsage = emptyMap(),
        )
        assertEquals(listOf("c", "a", "b"), sorted.map { it.id })
    }

    @Test
    fun an_order_for_another_context_is_ignored() {
        val sorted = sortButtons(
            buttons,
            contextId = "main",
            customOrders = mapOf("glass" to listOf("c", "b", "a")),
            buttonUsage = mapOf("a" to 7),
        )
        assertEquals("a", sorted.first().id)
    }
}

class DynamicChildrenTest {

    private val inventory = mapOf(
        "Corona" to listOf("Bottle", "Draft"),
        "St. Pauli Girl" to emptyList<String>(),
    )

    @Test
    fun ice_offers_every_well_plus_an_add_action() {
        val children = dynamicChildrenOf(
            ButtonConfig("ice", "ICE"),
            wells = listOf("Well #1", "Well #2"),
            beerInventory = emptyMap(),
        )
        assertEquals(listOf("well_Well #1", "well_Well #2", "add_well"), children.map { it.id })
    }

    @Test
    fun beer_offers_every_brand_plus_an_add_action() {
        val children = dynamicChildrenOf(
            ButtonConfig("restock_beer", "BEER"),
            wells = emptyList(),
            beerInventory = inventory,
        )
        assertEquals("add_brand", children.last().id)
        assertTrue(children.any { it.label == "Corona" })
        assertTrue(children.any { it.label == "St. Pauli Girl" })
    }

    @Test
    fun a_brand_tile_looks_its_types_up_by_label_not_id() {
        // The id carries a "brand_" prefix while the inventory map is keyed
        // by the bare name, so keying off the id would always come back empty.
        val children = dynamicChildrenOf(
            ButtonConfig("brand_Corona", "Corona"),
            wells = emptyList(),
            beerInventory = inventory,
        )
        assertEquals(listOf("type_Corona_Bottle", "type_Corona_Draft", "add_type"), children.map { it.id })
    }

    @Test
    fun a_brand_name_containing_a_period_still_resolves() {
        val children = dynamicChildrenOf(
            ButtonConfig("brand_St. Pauli Girl", "St. Pauli Girl"),
            wells = emptyList(),
            beerInventory = inventory,
        )
        assertEquals(listOf("add_type"), children.map { it.id })
    }

    @Test
    fun a_type_tile_offers_quantities() {
        val children = dynamicChildrenOf(
            ButtonConfig("type_Corona_Bottle", "Bottle"),
            wells = emptyList(),
            beerInventory = inventory,
        )
        assertEquals(listOf("qty_6", "qty_12", "qty_24", "qty_other"), children.map { it.id })
        assertEquals(ButtonAction.CustomQuantity, children.last().action)
    }

    @Test
    fun an_ordinary_button_returns_its_declared_children() {
        val garnish = DEFAULT_BUTTONS.first { it.id == "fruit" }
        val children = dynamicChildrenOf(garnish, emptyList(), emptyMap())
        assertEquals(garnish.children, children)
    }

    @Test
    fun a_leaf_returns_nothing() {
        assertTrue(dynamicChildrenOf(ButtonConfig("lime", "LIMES"), emptyList(), emptyMap()).isEmpty())
    }
}

class RequestLabelTest {

    @Test
    fun joins_a_trail_with_the_shared_separator() {
        val trail = listOf(ButtonConfig("restock_beer", "BEER"), ButtonConfig("brand_Corona", "Corona"))
        assertEquals("BEER: Corona", requestLabelFor(trail))
    }

    @Test
    fun a_single_step_produces_a_bare_label() {
        assertEquals("ICE", requestLabelFor(listOf(ButtonConfig("ice", "ICE"))))
    }

    @Test
    fun round_trips_back_through_the_resolver() {
        val trail = listOf(
            DEFAULT_BUTTONS.first { it.id == "fruit" },
            ButtonConfig("lime", "LIMES"),
        )
        val label = requestLabelFor(trail)
        assertEquals("GARNISH: LIMES", label)
        assertEquals("fruit", ButtonLabelResolver(DEFAULT_BUTTONS).idForLabel(label))
    }
}
