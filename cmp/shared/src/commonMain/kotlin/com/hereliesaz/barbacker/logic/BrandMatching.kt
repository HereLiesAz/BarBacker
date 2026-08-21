package com.hereliesaz.barbacker.logic

import kotlin.math.max
import kotlin.math.min

/**
 * Worst edit distance, as a fraction of the candidate's length, still
 * accepted as a match. Without this cap a bottle with no real match in the
 * list would silently resolve to whichever candidate happened to be
 * closest — a confidently wrong answer rather than a "type it yourself".
 */
private const val MAX_DISTANCE_RATIO = 0.34

/**
 * Below this ratio between the shorter and longer string, edit distance
 * stops being meaningful: a one-word OCR line would always beat a long
 * candidate on raw distance alone.
 */
private const val MIN_LENGTH_RATIO = 0.5

/** Score given to a substring hit — near-exact, but never beating a true equality. */
private const val SUBSTRING_SCORE = 0.05

/**
 * Fuzzy-matches OCR'd label lines against a list of known brands, or null
 * when nothing is close enough.
 *
 * A recognised line rarely equals a brand outright — labels mix the name
 * with ABV, volume and decoration, and OCR adds its own character errors.
 * Each (line, candidate) pair is scored by exact match, then containment,
 * then edit distance, and the best score across every pair wins.
 */
fun matchBrand(lines: List<String>, candidates: List<String>): String? {
    var bestCandidate: String? = null
    var bestScore = Double.MAX_VALUE

    for (rawLine in lines) {
        val line = normalizeForMatching(rawLine)
        if (line.isEmpty()) continue

        for (candidate in candidates) {
            val normCandidate = normalizeForMatching(candidate)
            if (normCandidate.isEmpty()) continue

            val lengthRatio =
                min(line.length, normCandidate.length).toDouble() /
                    max(line.length, normCandidate.length).toDouble()

            val score: Double = when {
                line == normCandidate -> 0.0

                // The whole candidate appears inside the line — "Jameson"
                // within "JAMESON IRISH WHISKEY 750ML 40% ABV". Safe at any
                // length ratio, because the entire candidate had to match.
                line.contains(normCandidate) -> SUBSTRING_SCORE

                // The line is a fragment OF the candidate. Only trusted when
                // it is not a tiny generic one: "GIN" is a substring of every
                // candidate ending in Gin, so without the ratio guard an
                // unrelated gin would match whichever brand sorted first.
                normCandidate.contains(line) && lengthRatio >= MIN_LENGTH_RATIO -> SUBSTRING_SCORE

                lengthRatio < MIN_LENGTH_RATIO -> continue

                else -> levenshtein(line, normCandidate).toDouble() / normCandidate.length
            }

            if (score <= MAX_DISTANCE_RATIO && score < bestScore) {
                bestScore = score
                bestCandidate = candidate
            }
        }
    }
    return bestCandidate
}

/** Lowercases, drops punctuation, and collapses runs of whitespace. */
internal fun normalizeForMatching(s: String): String =
    s.lowercase()
        .filter { it.isDigit() || it in 'a'..'z' || it.isWhitespace() }
        .replace(Regex("\\s+"), " ")
        .trim()

/**
 * Levenshtein edit distance, two rows at a time rather than a full matrix
 * — the candidate lists here are long enough that the allocation shows up.
 */
internal fun levenshtein(a: String, b: String): Int {
    val m = a.length
    val n = b.length
    if (m == 0) return n
    if (n == 0) return m

    var prev = IntArray(n + 1) { it }
    var curr = IntArray(n + 1)

    for (i in 1..m) {
        curr[0] = i
        for (j in 1..n) {
            val cost = if (a[i - 1] == b[j - 1]) 0 else 1
            curr[j] = minOf(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost)
        }
        val swap = prev
        prev = curr
        curr = swap
    }
    return prev[n]
}
