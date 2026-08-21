package com.hereliesaz.barbacker.data

import com.hereliesaz.barbacker.logWarning
import dev.gitlive.firebase.auth.FirebaseAuth
import dev.gitlive.firebase.auth.GoogleAuthProvider
import dev.gitlive.firebase.auth.OAuthProvider
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.onStart

/** The signed-in account, independent of any particular bar. */
data class AuthUser(
    val uid: String,
    val email: String?,
    val displayName: String?,
)

/**
 * Distinguishes "not signed in" from "we do not know yet".
 *
 * [Restoring] exists so a returning user does not see the sign-in form
 * flash before their persisted session is recovered.
 */
sealed interface AuthState {
    data object Restoring : AuthState
    data object SignedOut : AuthState
    data class SignedIn(val user: AuthUser) : AuthState
}

interface AuthRepository {
    val state: Flow<AuthState>
    val currentUser: AuthUser?

    suspend fun signIn(email: String, password: String)
    suspend fun register(email: String, password: String)

    /**
     * Signs in with tokens a platform sign-in flow already obtained.
     *
     * Firebase links by verified email, so signing in with Google using
     * the address of an existing password account attaches the provider
     * to that same account rather than creating a second one — which is
     * what keeps a bartender's memberships from vanishing because they
     * tapped a different button this time.
     */
    suspend fun signInWithSocial(credential: SocialCredential)

    suspend fun signOut()

    /**
     * Forces the ID token to be reissued.
     *
     * Required immediately after joining a bar: the `bars` custom claim
     * that gates most reads is stamped asynchronously by the
     * `onUserRoleChange` Cloud Function, and without a forced refresh the
     * client keeps presenting a token that lacks it — leaving every
     * role-gated read denied for up to an hour.
     */
    suspend fun refreshIdToken()

    /**
     * Whether the account carries the `admin` custom claim.
     *
     * Granted out of band by `scripts/set-admin-claim.js`, so it cannot be
     * forged client-side. Unlocks premium features for support work.
     */
    suspend fun isAdmin(): Boolean

    suspend fun updateDisplayName(name: String)
    suspend fun deleteAccount()
}

class FirebaseAuthRepository(private val auth: FirebaseAuth) : AuthRepository {

    override val state: Flow<AuthState> = auth.authStateChanged
        .map { user ->
            if (user == null) AuthState.SignedOut
            else AuthState.SignedIn(AuthUser(user.uid, user.email, user.displayName))
        }
        .onStart { emit(AuthState.Restoring) }

    override val currentUser: AuthUser?
        get() = auth.currentUser?.let { AuthUser(it.uid, it.email, it.displayName) }

    override suspend fun signIn(email: String, password: String) {
        auth.signInWithEmailAndPassword(email, password)
    }

    override suspend fun register(email: String, password: String) {
        auth.createUserWithEmailAndPassword(email, password)
    }

    override suspend fun signInWithSocial(credential: SocialCredential) {
        val authCredential = when (credential.provider) {
            SocialProvider.Google -> GoogleAuthProvider.credential(
                idToken = credential.idToken,
                accessToken = credential.accessToken,
            )

            // rawNonce, not the hash that went to Apple: Firebase hashes
            // this itself and compares, and passing the already-hashed
            // value fails as a generic invalid-credential error.
            SocialProvider.Apple -> OAuthProvider.credential(
                providerId = credential.provider.wire,
                accessToken = credential.accessToken,
                idToken = credential.idToken,
                rawNonce = credential.rawNonce,
            )
        }
        auth.signInWithCredential(authCredential)
    }

    override suspend fun signOut() {
        auth.signOut()
    }

    override suspend fun refreshIdToken() {
        // Failure here is recoverable — the claim still lands on the
        // token's own hourly refresh — so it is logged rather than thrown,
        // which would otherwise abort an already-successful join.
        try {
            auth.currentUser?.getIdToken(forceRefresh = true)
        } catch (e: Exception) {
            logWarning("Token refresh after join failed", e)
        }
    }

    override suspend fun isAdmin(): Boolean = try {
        auth.currentUser?.getIdTokenResult(forceRefresh = false)?.claims?.get("admin") == true
    } catch (e: Exception) {
        logWarning("Could not read admin claim", e)
        false
    }

    override suspend fun updateDisplayName(name: String) {
        val user = auth.currentUser ?: error("Not signed in")
        user.updateProfile(displayName = name)
    }

    override suspend fun deleteAccount() {
        val user = auth.currentUser ?: error("Not signed in")
        user.delete()
    }
}
