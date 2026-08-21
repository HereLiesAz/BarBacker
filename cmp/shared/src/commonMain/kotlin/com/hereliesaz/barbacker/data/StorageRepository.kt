package com.hereliesaz.barbacker.data

import dev.gitlive.firebase.storage.Data
import dev.gitlive.firebase.storage.FirebaseStorage
import dev.gitlive.firebase.storage.storageMetadata

/**
 * An image the user chose, already read into memory.
 *
 * Bytes rather than a platform file handle: the three platforms disagree
 * about what a "file" is (a content `Uri`, a `java.io.File`, an `NSURL`
 * behind a security scope), and none of those survives being handed to
 * shared code. Logos are capped at [MAX_LOGO_BYTES] anyway, so holding one
 * in memory costs nothing.
 */
class PickedImage(
    val bytes: ByteArray,
    /** Lowercase extension with no dot, e.g. `png`. */
    val extension: String,
    val contentType: String,
) {
    val sizeBytes: Int get() = bytes.size
}

/** Mirrors the web client's 2MB check; `storage.rules` enforces it too. */
const val MAX_LOGO_BYTES: Int = 2 * 1024 * 1024

/** The bottle-photo cap in `storage.rules`. Larger than a logo's, on purpose. */
const val MAX_BOTTLE_PHOTO_BYTES: Int = 5 * 1024 * 1024

/**
 * Extension to MIME type for the formats a logo may be in.
 *
 * The storage rule only checks `image/.*`, so this list is a product
 * decision rather than a security boundary — it matches the `accept`
 * attribute on the web client's file input so the two clients take the
 * same files.
 */
private val LOGO_TYPES: Map<String, String> = mapOf(
    "png" to "image/png",
    "jpg" to "image/jpeg",
    "jpeg" to "image/jpeg",
    "webp" to "image/webp",
    "svg" to "image/svg+xml",
)

/**
 * The canonical extension per MIME type — `image/jpeg` resolves to `jpg`,
 * not `jpeg`, so two uploads of the same photo overwrite each other
 * instead of leaving an orphan behind.
 */
private val LOGO_EXTENSIONS_BY_TYPE: Map<String, String> = mapOf(
    "image/png" to "png",
    "image/jpeg" to "jpg",
    "image/webp" to "webp",
    "image/svg+xml" to "svg",
)

val LOGO_EXTENSIONS: Set<String> get() = LOGO_TYPES.keys

/**
 * Builds a [PickedImage] from whatever identity the platform picker
 * returned — a file name on desktop and iOS, a MIME type on Android,
 * sometimes both and sometimes neither.
 *
 * The file name is consulted first: a picker that reports
 * `application/octet-stream` for a `.png` is common, whereas a file named
 * `.png` that is not one is the user's problem and Storage will still
 * accept it. Returns null when neither names an accepted format, which the
 * caller turns into a message rather than an upload that fails later with
 * a permission error.
 */
fun pickedImageOrNull(
    bytes: ByteArray,
    fileName: String?,
    contentType: String?,
): PickedImage? {
    val fromName = fileName
        ?.substringAfterLast('.', missingDelimiterValue = "")
        ?.lowercase()
        ?.takeIf { it in LOGO_TYPES }

    val normalisedType = contentType?.substringBefore(';')?.trim()?.lowercase()
    val extension = fromName ?: LOGO_EXTENSIONS_BY_TYPE[normalisedType] ?: return null

    return PickedImage(
        bytes = bytes,
        extension = extension,
        // Derived from the extension rather than passed through: the
        // storage rule matches on contentType, and the picker's value is
        // the less reliable of the two.
        contentType = LOGO_TYPES.getValue(extension),
    )
}

interface StorageRepository {
    /**
     * Uploads a premium bar's logo and returns its download URL.
     *
     * @throws IllegalArgumentException if the image is too large or not an
     *   accepted type. Checked here rather than only at the call site so a
     *   later caller cannot skip it — Storage would reject the write
     *   anyway, but as an opaque permission error.
     */
    suspend fun uploadBarLogo(barId: String, image: PickedImage): String

    /**
     * Uploads a scanned bottle photo and returns its download URL.
     *
     * Any member may write here, not just Manager+ — the whole point is a
     * barback flagging something to a manager. The URL never expires and
     * is stored un-redacted on the request document, which is why
     * `storage.rules` scopes READ to that bar's members rather than to any
     * signed-in user.
     */
    suspend fun uploadBottlePhoto(
        barId: String,
        uid: String,
        epochMillis: Long,
        jpegBytes: ByteArray,
    ): String
}

class FirebaseStorageRepository(private val storage: FirebaseStorage) : StorageRepository {

    override suspend fun uploadBarLogo(barId: String, image: PickedImage): String {
        require(image.sizeBytes <= MAX_LOGO_BYTES) { "Logo must be under 2MB." }
        require(image.extension in LOGO_TYPES) { "Logo must be a PNG, JPG, WebP, or SVG." }

        val reference = storage.reference(Paths.barLogo(barId, image.extension))
        reference.putData(
            data = storageDataOf(image.bytes),
            // Set explicitly rather than left to the SDK's guess: the
            // storage rule checks `contentType.matches('image/.*')`, and an
            // upload that arrives as application/octet-stream is rejected.
            metadata = storageMetadata { contentType = image.contentType },
        )
        return reference.getDownloadUrl()
    }

    override suspend fun uploadBottlePhoto(
        barId: String,
        uid: String,
        epochMillis: Long,
        jpegBytes: ByteArray,
    ): String {
        require(jpegBytes.size <= MAX_BOTTLE_PHOTO_BYTES) { "Photo must be under 5MB." }

        val reference = storage.reference(Paths.bottlePhoto(barId, uid, epochMillis))
        reference.putData(
            data = storageDataOf(jpegBytes),
            metadata = storageMetadata { contentType = "image/jpeg" },
        )
        return reference.getDownloadUrl()
    }
}

/**
 * Wraps raw bytes in the Firebase SDK's platform payload type.
 *
 * `Data` is an `expect class` with a different constructor on every target
 * — `ByteArray` on the JVM and Android, `NSData` on Apple — and no common
 * one, so this cannot be written once in shared code.
 */
internal expect fun storageDataOf(bytes: ByteArray): Data
