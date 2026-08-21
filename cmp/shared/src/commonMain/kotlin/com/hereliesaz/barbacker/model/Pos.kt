package com.hereliesaz.barbacker.model

/**
 * Client-visible state of a POS integration. The OAuth tokens themselves
 * live in `bars/{barId}/posSecrets`, KMS-encrypted and readable only by
 * Cloud Functions — nothing here is ever a credential.
 */
data class POSConnectionStatus(
    val provider: String,
    val connected: Boolean = false,
    val merchantId: String? = null,
    val error: String? = null,
    val connectedAt: Long? = null,
    val lastSyncedAt: Long? = null,
    val lastSyncedCount: Int? = null,
)

/** A menu item pulled in from a connected POS. */
data class POSMenuItem(
    val id: String,
    val name: String,
    /** Integer cents — never a float, to keep money arithmetic exact. */
    val price: Int,
    val category: String? = null,
    val provider: String,
    val syncedAt: Long? = null,
)

/** Whether a provider in the picker is actually wired up. */
enum class POSProviderStatus {
    Available,
    ComingSoon,
}

data class POSProvider(
    val id: String,
    val label: String,
    val status: POSProviderStatus,
)
