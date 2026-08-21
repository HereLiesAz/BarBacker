package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.hereliesaz.barbacker.ui.theme.BarBackerColors

/**
 * The shared shell for this app's dialogs: a titled surface with a content
 * area and a trailing action row.
 *
 * Material3's `AlertDialog` is not used for the larger ones because it
 * constrains its content height in ways the chat and roster panels fight —
 * both need to fill most of the screen and scroll internally.
 *
 * Note the lifecycle difference from the web client this mirrors: there,
 * every dialog stays mounted while closed and only toggles an `open`
 * attribute, so a half-typed form survives a close and reopen. Here the
 * caller composes the dialog conditionally, so its local state resets.
 * That is the better default — a reopened form starting clean is less
 * surprising than one holding a stale draft — but it is a real behavioural
 * difference, not an oversight.
 */
@Composable
fun BarBackerDialog(
    title: String,
    onDismiss: () -> Unit,
    // RowScope-scoped so an action row can use `Modifier.weight` to push
    // trailing buttons apart — several dialogs need a left-aligned
    // secondary action beside right-aligned confirm/cancel.
    actions: @Composable RowScope.() -> Unit,
    content: @Composable () -> Unit,
) {
    Dialog(
        onDismissRequest = onDismiss,
        properties = DialogProperties(usePlatformDefaultWidth = false),
    ) {
        Surface(
            color = BarBackerColors.SurfaceContainer,
            shape = MaterialTheme.shapes.large,
            modifier = Modifier.padding(16.dp).fillMaxWidth(),
        ) {
            Column(modifier = Modifier.padding(20.dp)) {
                Text(
                    text = title,
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Bold,
                    color = BarBackerColors.Primary,
                    modifier = Modifier.padding(bottom = 16.dp),
                )

                content()

                Row(
                    modifier = Modifier.fillMaxWidth().padding(top = 16.dp),
                    horizontalArrangement = Arrangement.End,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    actions()
                }
            }
        }
    }
}
