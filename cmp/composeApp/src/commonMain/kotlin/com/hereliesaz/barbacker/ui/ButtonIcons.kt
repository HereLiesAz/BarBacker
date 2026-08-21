package com.hereliesaz.barbacker.ui

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AcUnit
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Circle
import androidx.compose.material.icons.filled.Coffee
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Liquor
import androidx.compose.material.icons.filled.LocalBar
import androidx.compose.material.icons.filled.ManageAccounts
import androidx.compose.material.icons.filled.Restaurant
import androidx.compose.material.icons.filled.Security
import androidx.compose.material.icons.filled.SportsBar
import androidx.compose.material.icons.filled.WineBar
import androidx.compose.ui.graphics.vector.ImageVector

/**
 * Maps the Material Symbols names stored on button configs to the Compose
 * icon set.
 *
 * The bar document stores web icon names (`ac_unit`, `wine_bar`) because
 * the PWA renders them directly, and the two libraries do not share a
 * naming scheme. Rather than migrate the stored data — which would break
 * every already-deployed web client — the translation happens here.
 *
 * Unknown names fall back to a neutral circle. A missing icon must never
 * be the reason a tile fails to render: managers can set arbitrary icon
 * strings, and a blank tile is unusable while a generic one still works.
 */
fun iconForName(name: String?): ImageVector = when (name) {
    "coffee" -> Icons.Filled.Coffee
    "ac_unit" -> Icons.Filled.AcUnit
    "wine_bar" -> Icons.Filled.WineBar
    "restaurant" -> Icons.Filled.Restaurant
    "sports_bar" -> Icons.Filled.SportsBar
    "local_bar" -> Icons.Filled.LocalBar
    "liquor" -> Icons.Filled.Liquor
    "delete" -> Icons.Filled.Delete
    // No keg icon exists in the Compose set; a beer glass is the closest
    // reading at tile size.
    "keg" -> Icons.Filled.SportsBar
    "security" -> Icons.Filled.Security
    "manage_accounts" -> Icons.Filled.ManageAccounts
    "add" -> Icons.Filled.Add
    else -> Icons.Filled.Circle
}
