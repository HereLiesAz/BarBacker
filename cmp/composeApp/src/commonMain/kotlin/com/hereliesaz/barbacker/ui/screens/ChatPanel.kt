package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PushPin
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.model.ChatMessage
import com.hereliesaz.barbacker.ui.theme.BarBackerColors
import kotlinx.coroutines.launch

/**
 * The bar's chat.
 *
 * Any member can post. Manager+ can pin — pinned messages drive the
 * dashboard marquee — and delete anyone's message; everyone can delete
 * their own. Message text is immutable, and there is deliberately no edit
 * affordance: `firestore.rules` restricts updates to the pin fields, so an
 * edit button could only ever fail.
 */
@Composable
fun ChatPanel(
    messages: List<ChatMessage>,
    hasMore: Boolean,
    loadingMore: Boolean,
    currentUserId: String,
    isManagerPlus: Boolean,
    onLoadMore: () -> Unit,
    onSend: suspend (text: String, pin: Boolean) -> Result<Unit>,
    onTogglePin: (messageId: String, pin: Boolean) -> Unit,
    onDelete: (messageId: String) -> Unit,
    onClose: () -> Unit,
) {
    var text by remember { mutableStateOf("") }
    var pinNext by remember { mutableStateOf(false) }
    var sending by remember { mutableStateOf(false) }
    var sendError by remember { mutableStateOf<String?>(null) }
    var confirmDeleteId by remember { mutableStateOf<String?>(null) }

    val listState = rememberLazyListState()
    val scope = rememberCoroutineScope()

    // "Stuck to the bottom" means the last message is actually visible.
    // Autoscrolling unconditionally would yank the view away from someone
    // scrolled up reading history every time a message arrives.
    val stuckToBottom by remember {
        derivedStateOf {
            val last = listState.layoutInfo.visibleItemsInfo.lastOrNull()
            last == null || last.index >= listState.layoutInfo.totalItemsCount - 2
        }
    }

    LaunchedEffect(messages.size) {
        if (messages.isNotEmpty() && stuckToBottom) {
            listState.animateScrollToItem(messages.lastIndex)
        }
    }

    fun send() {
        if (text.isBlank() || sending) return
        sending = true
        sendError = null
        scope.launch {
            onSend(text, pinNext)
                .onSuccess {
                    // Cleared only after the write lands. On a rejection
                    // the typed text stays where the user can retry it.
                    text = ""
                    pinNext = false
                    if (messages.isNotEmpty()) listState.animateScrollToItem(messages.lastIndex)
                }
                .onFailure { sendError = it.message ?: "Failed to send. Please try again." }
            sending = false
        }
    }

    BarBackerDialog(
        title = "Chat",
        onDismiss = onClose,
        actions = { TextButton(onClick = onClose) { Text("Close") } },
    ) {
        Column(modifier = Modifier.fillMaxWidth().height(480.dp)) {
            LazyColumn(
                state = listState,
                modifier = Modifier.weight(1f).fillMaxWidth(),
                verticalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                if (hasMore) {
                    item(key = "load-more") {
                        Box(Modifier.fillMaxWidth(), contentAlignment = Alignment.Center) {
                            TextButton(onClick = onLoadMore, enabled = !loadingMore) {
                                Text(if (loadingMore) "Loading…" else "Load earlier messages")
                            }
                        }
                    }
                }

                if (messages.isEmpty()) {
                    item(key = "empty") {
                        Text(
                            text = "No messages yet. Say hello.",
                            color = BarBackerColors.OnSurfaceVariant,
                            textAlign = TextAlign.Center,
                            modifier = Modifier.fillMaxWidth().padding(top = 32.dp),
                        )
                    }
                }

                items(messages, key = { it.id }) { message ->
                    MessageBubble(
                        message = message,
                        isOwn = message.authorId == currentUserId,
                        isManagerPlus = isManagerPlus,
                        onTogglePin = { onTogglePin(message.id, !message.pinned) },
                        onRequestDelete = { confirmDeleteId = message.id },
                    )
                }
            }

            sendError?.let {
                Text(
                    text = it,
                    color = BarBackerColors.Error,
                    style = MaterialTheme.typography.bodySmall,
                    modifier = Modifier.padding(vertical = 4.dp),
                )
            }

            HorizontalDivider(color = BarBackerColors.Outline)
            Spacer(Modifier.height(8.dp))

            Row(
                verticalAlignment = Alignment.Bottom,
                horizontalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                OutlinedTextField(
                    value = text,
                    onValueChange = { text = it },
                    label = { Text("Message") },
                    modifier = Modifier.weight(1f),
                    maxLines = 4,
                )

                if (isManagerPlus) {
                    IconButton(onClick = { pinNext = !pinNext }) {
                        Icon(
                            Icons.Filled.PushPin,
                            contentDescription = if (pinNext) {
                                "Message will be pinned"
                            } else {
                                "Pin this message"
                            },
                            tint = if (pinNext) {
                                BarBackerColors.Pinned
                            } else {
                                BarBackerColors.OnSurfaceVariant
                            },
                        )
                    }
                }

                Button(onClick = ::send, enabled = !sending) {
                    Text(if (sending) "Sending…" else "Send")
                }
            }
        }
    }

    confirmDeleteId?.let { id ->
        AlertDialog(
            onDismissRequest = { confirmDeleteId = null },
            title = { Text("Delete Message?") },
            text = { Text("This can't be undone.") },
            confirmButton = {
                Button(
                    onClick = {
                        onDelete(id)
                        confirmDeleteId = null
                    },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = BarBackerColors.Error,
                        contentColor = BarBackerColors.OnError,
                    ),
                ) { Text("Delete") }
            },
            dismissButton = {
                TextButton(onClick = { confirmDeleteId = null }) { Text("Cancel") }
            },
            containerColor = BarBackerColors.SurfaceContainer,
        )
    }
}

@Composable
private fun MessageBubble(
    message: ChatMessage,
    isOwn: Boolean,
    isManagerPlus: Boolean,
    onTogglePin: () -> Unit,
    onRequestDelete: () -> Unit,
) {
    Column(
        modifier = Modifier.fillMaxWidth(),
        horizontalAlignment = if (isOwn) Alignment.End else Alignment.Start,
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(6.dp),
        ) {
            Text(
                text = message.authorName.ifBlank { "Unknown" },
                style = MaterialTheme.typography.labelSmall,
                fontWeight = FontWeight.Medium,
                color = BarBackerColors.OnSurfaceVariant,
            )
            // Blank for messages migrated from the old notices collection,
            // which never captured a role — so no chip rather than an empty one.
            if (message.authorRole.isNotBlank()) {
                Text(
                    text = message.authorRole.uppercase(),
                    fontSize = 10.sp,
                    color = BarBackerColors.OnSurfaceVariant,
                    modifier = Modifier
                        .background(BarBackerColors.SecondaryContainer, RoundedCornerShape(4.dp))
                        .padding(horizontal = 5.dp, vertical = 2.dp),
                )
            }
            if (message.pinned) {
                Icon(
                    Icons.Filled.PushPin,
                    contentDescription = "Pinned",
                    tint = BarBackerColors.Pinned,
                    modifier = Modifier.size(14.dp),
                )
            }
        }

        Box(
            modifier = Modifier
                .widthIn(max = 320.dp)
                .background(
                    if (message.pinned) {
                        BarBackerColors.Pinned.copy(alpha = 0.15f)
                    } else {
                        BarBackerColors.SecondaryContainer
                    },
                    RoundedCornerShape(8.dp),
                )
                .then(
                    if (message.pinned) {
                        Modifier.border(
                            1.dp,
                            BarBackerColors.Pinned.copy(alpha = 0.5f),
                            RoundedCornerShape(8.dp),
                        )
                    } else {
                        Modifier
                    },
                )
                .padding(horizontal = 12.dp, vertical = 8.dp),
        ) {
            Text(text = message.text, color = BarBackerColors.OnSurface)
        }

        Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
            if (isManagerPlus) {
                TextButton(onClick = onTogglePin) {
                    Text(if (message.pinned) "Unpin" else "Pin", fontSize = 12.sp)
                }
            }
            if (isOwn || isManagerPlus) {
                TextButton(onClick = onRequestDelete) {
                    Text("Delete", fontSize = 12.sp, color = BarBackerColors.Error)
                }
            }
        }
    }
}

/**
 * The dashboard's scrolling banner of pinned messages.
 *
 * Rendered only when something is pinned; an empty strip would just eat
 * vertical space on a screen that has none to spare.
 */
@Composable
fun PinnedMarquee(pinned: List<ChatMessage>, onClick: () -> Unit) {
    if (pinned.isEmpty()) return

    val listState = rememberLazyListState()

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(32.dp)
            .background(BarBackerColors.Pinned.copy(alpha = 0.12f))
            .clickable(onClick = onClick),
    ) {
        // A horizontally scrollable row rather than a CSS-style infinite
        // marquee: an animation that never stops is hard to read and
        // impossible to catch up with, whereas this can be flicked through
        // and still auto-advances below.
        androidx.compose.foundation.lazy.LazyRow(
            state = listState,
            modifier = Modifier.fillMaxSize(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(24.dp),
        ) {
            items(pinned, key = { it.id }) { message ->
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.padding(horizontal = 12.dp),
                ) {
                    Icon(
                        Icons.Filled.PushPin,
                        contentDescription = null,
                        tint = BarBackerColors.Pinned,
                        modifier = Modifier.size(12.dp),
                    )
                    Spacer(Modifier.width(6.dp))
                    Text(
                        text = message.text,
                        color = BarBackerColors.Pinned,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Medium,
                        maxLines = 1,
                    )
                    Spacer(Modifier.width(6.dp))
                    Text(
                        text = "(${message.authorName})",
                        color = BarBackerColors.Pinned.copy(alpha = 0.7f),
                        fontSize = 11.sp,
                        maxLines = 1,
                    )
                }
            }
        }
    }

    HorizontalDivider(color = BarBackerColors.Pinned.copy(alpha = 0.3f))

    // Advance one message at a time so a bar with several pinned notices
    // cycles through them without anyone having to touch the screen.
    LaunchedEffect(pinned.size) {
        if (pinned.size <= 1) return@LaunchedEffect
        var index = 0
        while (true) {
            kotlinx.coroutines.delay(4000)
            index = (index + 1) % pinned.size
            listState.animateScrollToItem(index)
        }
    }
}
