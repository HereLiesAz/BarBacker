package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import dev.gitlive.firebase.firestore.FirebaseFirestore
import io.ktor.client.HttpClient
import io.ktor.client.HttpClientConfig
import io.ktor.client.call.body
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.parameter
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

/**
 * Minimum query length before a lookup fires. Two characters match half
 * the map and waste a request against a rate-limited public service.
 */
const val PLACE_SEARCH_MIN_LENGTH: Int = 3

/** How long to sit on keystrokes before searching. */
const val PLACE_SEARCH_DEBOUNCE_MILLIS: Long = 500

/** Cap on the "bars we already know about" half of the results. */
private const val EXISTING_BAR_LIMIT = 5

/**
 * The high private-use codepoint Firestore prefix queries conventionally
 * end at. `startAt(q)` through `endAt(q + sentinel)` is how you spell
 * `LIKE 'q%'`: U+F8FF sorts after any ordinary character, so the range
 * covers every string beginning with the query.
 */
private const val PREFIX_QUERY_SENTINEL = "\uF8FF"

/**
 * A place a user can turn into a bar: either one this app already knows
 * about, or an OpenStreetMap result.
 */
data class PlaceResult(
    /**
     * The document id this place would become.
     *
     * For an existing bar, its actual id. For an OSM result,
     * `osm_<type>_<id>` — the type is part of the key because `osm_id` is
     * only unique WITHIN an element type, so two unrelated venues can
     * share one.
     */
    val barId: String,
    val name: String,
    val displayName: String,
    /** True when this row came from our own Firestore, not from OSM. */
    val isExistingBar: Boolean,
)

interface PlaceSearchRepository {
    /**
     * Searches OpenStreetMap for matching venues.
     *
     * Failure is returned rather than thrown so the caller can tell a
     * partial result (one source down) from a total one, and only clear
     * the list in the latter case.
     */
    suspend fun searchOpenStreetMap(query: String): Result<List<PlaceResult>>

    /** Prefix-searches bars this app already has. */
    suspend fun searchExistingBars(query: String): Result<List<PlaceResult>>
}

class DefaultPlaceSearchRepository(
    private val firestore: FirebaseFirestore,
    private val httpClient: HttpClient,
) : PlaceSearchRepository {

    @Serializable
    private data class NominatimResult(
        @SerialName("osm_id") val osmId: Long? = null,
        @SerialName("osm_type") val osmType: String? = null,
        @SerialName("display_name") val displayName: String = "",
        val name: String? = null,
    )

    override suspend fun searchOpenStreetMap(query: String): Result<List<PlaceResult>> =
        runCatching {
            val response: List<NominatimResult> = httpClient
                .get("https://nominatim.openstreetmap.org/search") {
                    parameter("format", "json")
                    // The literal " bar" suffix steers a plain name toward
                    // drinking establishments; without it, a common venue
                    // name returns mostly streets.
                    parameter("q", "$query bar")
                }
                .body()

            response.mapNotNull { result ->
                val osmId = result.osmId ?: return@mapNotNull null
                val type = result.osmType ?: "unknown"
                PlaceResult(
                    barId = "osm_${type}_$osmId",
                    name = result.name?.takeIf { it.isNotBlank() }
                        ?: result.displayName.substringBefore(","),
                    displayName = result.displayName,
                    isExistingBar = false,
                )
            }
        }.onFailure { logWarning("OpenStreetMap lookup failed", it) }

    override suspend fun searchExistingBars(query: String): Result<List<PlaceResult>> =
        runCatching {
            firestore.collection(Paths.BARS)
                .orderBy("name")
                // The *FieldValues form rather than the vararg overloads,
                // which GitLive has deprecated.
                .startAtFieldValues { add(query) }
                .endAtFieldValues { add(query + PREFIX_QUERY_SENTINEL) }
                .limit(EXISTING_BAR_LIMIT)
                .get()
                .documents
                .mapNotNull { snapshot ->
                    val name = snapshot.field<String>("name") ?: return@mapNotNull null
                    val city = snapshot.field<String>("city").orEmpty()
                    val state = snapshot.field<String>("state").orEmpty()
                    PlaceResult(
                        barId = snapshot.id,
                        name = name,
                        displayName = listOf(name, "$city $state".trim())
                            .filter { it.isNotBlank() }
                            .joinToString(", "),
                        isExistingBar = true,
                    )
                }
        }.onFailure { logWarning("Existing-bar lookup failed", it) }
}

/**
 * Shared HTTP client configuration.
 *
 * The user agent is not optional politeness: Nominatim's usage policy
 * requires an identifying one and blocks requests that omit it. The
 * timeouts matter too — a public service that hangs must not leave the
 * search spinner up indefinitely.
 */
internal fun HttpClientConfig<*>.configureForPlaceSearch() {
    install(ContentNegotiation) {
        json(
            Json {
                // Nominatim returns far more fields than we model, and adds
                // more over time.
                ignoreUnknownKeys = true
                isLenient = true
            },
        )
    }
    install(HttpTimeout) {
        requestTimeoutMillis = 10_000
        connectTimeoutMillis = 5_000
    }
    defaultRequest {
        header("User-Agent", "BarBacker/0.6 (+https://github.com/HereLiesAz/BarBacker)")
    }
}
