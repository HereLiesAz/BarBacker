package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.ui.theme.BarBackerColors

/**
 * Shown while a persisted session is being recovered.
 *
 * Exists purely so a returning user does not see the sign-in form flash
 * before their credentials resolve.
 */
@Composable
fun RestoringScreen() {
    Surface(color = BarBackerColors.Background, modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            CircularProgressIndicator(modifier = Modifier.width(32.dp))
        }
    }
}

@Composable
fun SignInScreen(
    isRegistering: Boolean,
    authError: String?,
    onSetRegistering: (Boolean) -> Unit,
    onSubmit: (email: String, password: String) -> Unit,
) {
    var email by rememberSaveable { mutableStateOf("") }
    var password by rememberSaveable { mutableStateOf("") }
    val canSubmit = remember(email, password) {
        email.isNotBlank() && password.isNotBlank()
    }

    Surface(color = BarBackerColors.Background, modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier.fillMaxSize().padding(24.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text(
                text = "BARBACKER",
                fontSize = 36.sp,
                fontWeight = FontWeight.Bold,
                letterSpacing = 4.sp,
                color = BarBackerColors.Primary,
            )

            Spacer(Modifier.height(32.dp))

            if (authError != null) {
                Text(
                    text = authError,
                    color = BarBackerColors.Error,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.width(300.dp).padding(bottom = 16.dp),
                )
            }

            Column(
                modifier = Modifier.width(300.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                OutlinedTextField(
                    value = email,
                    onValueChange = { email = it },
                    label = { Text("Email") },
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Email,
                        imeAction = ImeAction.Next,
                    ),
                    modifier = Modifier.fillMaxWidth(),
                )

                OutlinedTextField(
                    value = password,
                    onValueChange = { password = it },
                    label = { Text("Password") },
                    singleLine = true,
                    visualTransformation = PasswordVisualTransformation(),
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Password,
                        imeAction = ImeAction.Done,
                    ),
                    modifier = Modifier.fillMaxWidth(),
                )

                Button(
                    onClick = { onSubmit(email.trim(), password) },
                    enabled = canSubmit,
                    modifier = Modifier.fillMaxWidth().height(56.dp),
                ) {
                    Text(if (isRegistering) "Create Account" else "Clock In")
                }
            }

            Spacer(Modifier.height(16.dp))

            Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                TextButton(onClick = { onSetRegistering(!isRegistering) }) {
                    Text(if (isRegistering) "Login" else "Register")
                }
            }

            Spacer(Modifier.height(32.dp))

            Text(
                text = "For iOS alerts, install ntfy.sh",
                style = MaterialTheme.typography.bodySmall,
                color = BarBackerColors.OnSurfaceVariant,
                textAlign = TextAlign.Center,
            )
        }
    }
}
