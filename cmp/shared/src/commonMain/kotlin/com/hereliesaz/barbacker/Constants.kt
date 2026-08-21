package com.hereliesaz.barbacker

import com.hereliesaz.barbacker.model.ButtonAction
import com.hereliesaz.barbacker.model.ButtonConfig
import com.hereliesaz.barbacker.model.POSProvider
import com.hereliesaz.barbacker.model.POSProviderStatus

/**
 * Job titles a joining member can pick for themselves.
 *
 * Deliberately NOT the privilege list. `Owner` is auto-assigned to whoever
 * created the bar and `Manager` can only be granted server-side, so neither
 * is offered here — picking one of these sets `jobTitle`, and the
 * security-relevant `role` is computed separately from the bar's `ownerId`.
 */
val JOB_TITLES: List<String> = listOf("Bartender", "Barback", "Server", "Security", "Runner")

/** Brand suggestions for the beer inventory. */
val DEFAULT_BEERS: List<String> = listOf(
    "Amstel Light", "Bass Ale", "Beck's", "Blue Moon", "Bud Light", "Bud Light Lime",
    "Bud Light Platinum", "Budweiser", "Busch", "Busch Light", "Coors", "Coors Banquet",
    "Coors Light", "Corona", "Corona Extra", "Corona Light", "Corona Premier",
    "Dos Equis Amber", "Dos Equis Lager", "Foster's", "Goose Island IPA", "Guinness",
    "Heineken", "Heineken 0.0", "Heineken Light", "Hoegaarden", "Kona Big Wave",
    "Lagunitas IPA", "Landshark Lager", "Michelob", "Michelob Light", "Michelob Ultra",
    "Michelob Ultra Amber", "Miller Genuine Draft", "Miller High Life", "Miller Lite",
    "Modelo Especial", "Modelo Negra", "Natural Light", "Newcastle Brown Ale",
    "Pabst Blue Ribbon", "Pacifico", "Peroni", "Pilsner Urquell", "Red Stripe",
    "Rolling Rock", "Samuel Adams Boston Lager", "Sapporo", "Shiner Bock", "Shock Top",
    "Sierra Nevada Pale Ale", "Sol", "St. Pauli Girl", "Stella Artois", "Tecate",
    "Victoria", "Yuengling",
)

/**
 * Spirits brands. Doubles as the candidate pool the bottle scanner
 * fuzzy-matches OCR'd label text against.
 */
val DEFAULT_SPIRITS: List<String> = listOf(
    "Absolut", "Bacardi", "Bacardi Superior", "Baileys Irish Cream", "Bombay Sapphire",
    "Bulleit Bourbon", "Bulleit Rye", "Buffalo Trace", "Campari", "Captain Morgan",
    "Casamigos Blanco", "Casamigos Reposado", "Chivas Regal", "Ciroc", "Cointreau",
    "Crown Royal", "Don Julio Blanco", "Don Julio Reposado", "Dewar's", "Fireball",
    "Glenfiddich", "Glenlivet", "Goslings Black Seal", "Grand Marnier", "Grey Goose",
    "Hendrick's Gin", "Hennessy VS", "Jack Daniel's", "Jägermeister", "Jameson",
    "Jim Beam", "Johnnie Walker Black", "Johnnie Walker Red", "Jose Cuervo", "Kahlúa",
    "Ketel One", "Knob Creek", "Macallan 12", "Maker's Mark", "Malibu", "Patrón Silver",
    "Patrón Reposado", "Ricard", "Sailor Jerry", "Skyy Vodka", "Smirnoff",
    "Southern Comfort", "Suntory Toki", "Svedka", "Tanqueray", "Tito's Handmade Vodka",
    "Woodford Reserve",
)

/** The grid a brand-new bar starts with, before any customisation. */
val DEFAULT_BUTTONS: List<ButtonConfig> = listOf(
    ButtonConfig(id = "break", label = "BREAK", icon = "coffee"),
    ButtonConfig(id = "ice", label = "ICE", icon = "ac_unit"),
    ButtonConfig(
        id = "glass", label = "SERVICE ITEMS", icon = "wine_bar",
        children = listOf(
            ButtonConfig("pint", "PINT"),
            ButtonConfig("rocks", "ROCKS"),
            ButtonConfig("collins", "COLLINS"),
            ButtonConfig("wine", "WINE GLASS"),
            ButtonConfig("coupe", "COUPE"),
            ButtonConfig("shot", "SHOT GLASS"),
            ButtonConfig("napkins", "NAPKINS"),
            ButtonConfig("straws", "STRAWS"),
            ButtonConfig("coasters", "COASTERS"),
        ),
    ),
    ButtonConfig(
        id = "fruit", label = "GARNISH", icon = "restaurant",
        children = listOf(
            ButtonConfig("lime", "LIMES"),
            ButtonConfig("lemon", "LEMONS"),
            ButtonConfig("orange", "ORANGES"),
            ButtonConfig("olive", "OLIVES"),
            ButtonConfig("cherry", "CHERRIES"),
            ButtonConfig("mint", "MINT"),
        ),
    ),
    ButtonConfig(id = "restock_beer", label = "BEER", icon = "sports_bar"),
    ButtonConfig(
        id = "mixers", label = "MIXERS", icon = "local_bar",
        children = listOf(
            ButtonConfig("soda", "SODA"),
            ButtonConfig("tonic", "TONIC"),
            ButtonConfig("coke", "COKE"),
            ButtonConfig("diet", "DIET COKE"),
            ButtonConfig("sprite", "SPRITE"),
            ButtonConfig("ginger_ale", "GINGER ALE"),
            ButtonConfig("ginger_beer", "GINGER BEER"),
            ButtonConfig("cranberry", "CRANBERRY"),
            ButtonConfig("oj", "OJ"),
            ButtonConfig("pineapple", "PINEAPPLE"),
            ButtonConfig("grapefruit", "GRAPEFRUIT"),
            ButtonConfig("sour", "SOUR MIX"),
            ButtonConfig("simple", "SIMPLE SYRUP"),
            ButtonConfig("grenadine", "GRENADINE"),
            ButtonConfig("bitters", "BITTERS"),
        ),
    ),
    ButtonConfig(
        id = "restock", label = "WELL", icon = "liquor",
        children = listOf(
            ButtonConfig("vodka", "VODKA"),
            ButtonConfig("gin", "GIN"),
            ButtonConfig("tequila", "TEQUILA"),
            ButtonConfig("rum", "RUM"),
            ButtonConfig("whiskey", "WHISKEY"),
            ButtonConfig("cordial", "MIXERS"),
            ButtonConfig("beer", "BEER"),
        ),
    ),
    ButtonConfig(id = "trash", label = "TRASH / SPILL", icon = "delete"),
    ButtonConfig(id = "keg", label = "KEG", icon = "keg"),
    ButtonConfig(id = "security", label = "SECURITY", icon = "security"),
    ButtonConfig(id = "manager", label = "MANAGER", icon = "manage_accounts"),
)

/** The synthesised free-text tile appended to the end of the main grid. */
val CUSTOM_REQUEST_BUTTON = ButtonConfig(
    id = "custom_req_btn",
    label = "CUSTOM",
    icon = "add",
    isCustom = true,
)

/** Synthesised sub-menu entries. Ids are matched exactly elsewhere. */
val ADD_WELL_BUTTON = ButtonConfig(id = "add_well", label = "+ ADD WELL", isCustom = true)
val ADD_BRAND_BUTTON =
    ButtonConfig(id = "add_brand", label = "+ ADD BRAND", action = ButtonAction.AddBrand, isCustom = true)
val ADD_TYPE_BUTTON =
    ButtonConfig(id = "add_type", label = "+ ADD TYPE", action = ButtonAction.AddType, isCustom = true)

/** Quantity leaves offered under a beer type. */
val QUANTITY_BUTTONS: List<ButtonConfig> = listOf(
    ButtonConfig("qty_6", "6"),
    ButtonConfig("qty_12", "12"),
    ButtonConfig("qty_24", "24"),
    ButtonConfig("qty_other", "Other", action = ButtonAction.CustomQuantity),
)

/**
 * Which top-level buttons each job title is paged for by default, applied
 * only when a member has never set preferences of their own.
 *
 * Keyed by `jobTitle`, falling back to `role`. `"Staff"` has an entry
 * because the invite-consumption Cloud Function writes that as a jobTitle;
 * without it, invited members silently received zero notifications forever.
 * It mirrors Barback — the broadest generic floor-worker set — rather than
 * defaulting to nothing.
 */
val NOTIFICATION_DEFAULTS_BY_TITLE: Map<String, List<String>> = mapOf(
    "Owner" to listOf(
        "manager", "security", "keg", "trash", "ice", "glass", "fruit", "restock",
        "mixers", "restock_beer", "break",
    ),
    "Manager" to listOf("manager", "security", "keg", "trash", "break"),
    "Bartender" to listOf(
        "ice", "glass", "fruit", "restock", "keg", "trash", "mixers", "restock_beer",
    ),
    "Barback" to listOf(
        "ice", "glass", "fruit", "restock", "keg", "trash", "mixers", "restock_beer", "break",
    ),
    // Servers generally send pages rather than receive them.
    "Server" to emptyList(),
    "Runner" to listOf("ice", "glass", "restock", "mixers", "restock_beer"),
    "Security" to listOf("security", "manager", "break"),
    "Staff" to listOf(
        "ice", "glass", "fruit", "restock", "keg", "trash", "mixers", "restock_beer", "break",
    ),
)

/**
 * POS providers offered in the picker. Only [POSProviderStatus.Available]
 * ones are selectable; the rest render disabled. Flipping one over is a
 * one-line change here once its Cloud Function adapter exists.
 */
val POS_PROVIDERS: List<POSProvider> = listOf(
    POSProvider("square", "Square", POSProviderStatus.Available),
    POSProvider("toast", "Toast", POSProviderStatus.Available),
    POSProvider("clover", "Clover", POSProviderStatus.ComingSoon),
    POSProvider("lightspeed", "Lightspeed", POSProviderStatus.ComingSoon),
    POSProvider("spoton", "SpotOn", POSProviderStatus.ComingSoon),
    POSProvider("touchbistro", "TouchBistro", POSProviderStatus.ComingSoon),
    POSProvider("revel", "Revel", POSProviderStatus.ComingSoon),
    POSProvider("lavu", "Lavu", POSProviderStatus.ComingSoon),
    POSProvider("talech", "Talech", POSProviderStatus.ComingSoon),
    POSProvider("aloha", "Aloha", POSProviderStatus.ComingSoon),
)

// --- Behavioural constants, named here so the UI and the tests agree. ---

/** Cap on the locally-muted request list, oldest dropped first. */
const val MAX_IGNORED_IDS: Int = 200

/** How far back the dashboard's request query reaches. */
const val REQUEST_WINDOW_MILLIS: Long = 24L * 60 * 60 * 1000

/** Cap on the dashboard's request query. */
const val REQUEST_QUERY_LIMIT: Int = 100

/** Cap on the 86'd list query. */
const val EIGHTY_SIX_QUERY_LIMIT: Int = 200

/** How often the request listener re-subscribes to keep its window fresh. */
const val REQUEST_WINDOW_REFRESH_MILLIS: Long = 60L * 60 * 1000

/** Nag cadence while un-muted pending requests exist. */
const val NAG_INTERVAL_MILLIS: Long = 60L * 1000

/** Idle time in a sub-menu before the pending selection is auto-submitted. */
const val INACTIVITY_AUTO_SUBMIT_MILLIS: Long = 60L * 1000

/** How long the button-usage buffer accumulates before being flushed. */
const val USAGE_FLUSH_INTERVAL_MILLIS: Long = 10L * 1000

/** Fallback that releases the join screen if the invite lookup stalls. */
const val INVITE_CHECK_TIMEOUT_MILLIS: Long = 8L * 1000

/** Suffix appended to an auto-submitted request. */
const val ASK_ME_SUFFIX: String = " (Ask Me)"

/** Separator joining breadcrumb segments into a request label. */
const val LABEL_SEPARATOR: String = ": "
