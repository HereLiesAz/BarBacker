package com.hereliesaz.barbacker.data

import dev.gitlive.firebase.storage.Data

internal actual fun storageDataOf(bytes: ByteArray): Data = Data(bytes)
