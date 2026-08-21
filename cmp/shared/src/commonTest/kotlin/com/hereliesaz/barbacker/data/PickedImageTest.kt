package com.hereliesaz.barbacker.data

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class PickedImageTest {

    private val bytes = ByteArray(4)

    @Test
    fun resolves_from_a_file_name() {
        val image = pickedImageOrNull(bytes, "logo.PNG", contentType = null)
        assertEquals("png", image?.extension)
        assertEquals("image/png", image?.contentType)
    }

    @Test
    fun resolves_from_a_mime_type_when_there_is_no_file_name() {
        val image = pickedImageOrNull(bytes, fileName = null, contentType = "image/webp")
        assertEquals("webp", image?.extension)
        assertEquals("image/webp", image?.contentType)
    }

    /**
     * Android's picker routinely reports `application/octet-stream` for a
     * perfectly good PNG, so a recognised file name has to win.
     */
    @Test
    fun a_recognised_file_name_beats_a_useless_mime_type() {
        val image = pickedImageOrNull(bytes, "brand.png", "application/octet-stream")
        assertEquals("png", image?.extension)
        assertEquals("image/png", image?.contentType)
    }

    /**
     * Both uploads must land on the SAME object, or picking a `.jpeg`
     * after a `.jpg` leaves the old logo orphaned in the bucket while the
     * bar document points at the new one.
     */
    @Test
    fun jpeg_and_jpg_both_declare_image_jpeg() {
        assertEquals("image/jpeg", pickedImageOrNull(bytes, "a.jpg", null)?.contentType)
        assertEquals("image/jpeg", pickedImageOrNull(bytes, "a.jpeg", null)?.contentType)
        assertEquals("jpg", pickedImageOrNull(bytes, null, "image/jpeg")?.extension)
    }

    @Test
    fun a_mime_type_with_parameters_still_resolves() {
        assertEquals("png", pickedImageOrNull(bytes, null, "image/png; charset=binary")?.extension)
    }

    @Test
    fun an_unusable_identity_resolves_to_null() {
        assertNull(pickedImageOrNull(bytes, "notes.pdf", "application/pdf"))
        assertNull(pickedImageOrNull(bytes, fileName = null, contentType = null))
        assertNull(pickedImageOrNull(bytes, "no-extension-at-all", null))
    }

    @Test
    fun gif_is_rejected_even_though_storage_rules_would_take_it() {
        // The rule only checks `image/.*`; the web client's file input does
        // not offer GIF, and the two clients have to accept the same set.
        assertNull(pickedImageOrNull(bytes, "loop.gif", "image/gif"))
    }
}
