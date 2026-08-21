package com.hereliesaz.barbacker.ui.screens

import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Circle
import androidx.compose.material.icons.filled.HourglassEmpty
import androidx.compose.material.icons.filled.RadioButtonUnchecked
import androidx.compose.material.icons.filled.Verified
import androidx.compose.material3.Button
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hereliesaz.barbacker.model.BarUser
import com.hereliesaz.barbacker.model.OwnershipClaim
import com.hereliesaz.barbacker.ui.theme.BarBackerColors

/**
 * Who is on shift, plus — for Manager+ — the two review queues.
 *
 * The review sections and the "Clocked In" list behave differently when
 * empty on purpose: an empty floor is worth stating, whereas an empty
 * approval queue is just noise, so those sections vanish entirely.
 */
@Composable
fun RosterDialog(
    clockedIn: List<BarUser>,
    offClock: List<BarUser>,
    pending: List<BarUser>,
    ownershipClaims: List<OwnershipClaim>,
    isManagerPlus: Boolean,
    onApproveMember: (String) -> Unit,
    onRejectMember: (String) -> Unit,
    onReviewClaim: (claimId: String, approve: Boolean) -> Unit,
    onClose: () -> Unit,
) {
    BarBackerDialog(
        title = "Who's On",
        onDismiss = onClose,
        actions = { TextButton(onClick = onClose) { Text("Close") } },
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .heightIn(max = 460.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            if (isManagerPlus && pending.isNotEmpty()) {
                RosterSection(
                    title = "WAITING FOR APPROVAL (${pending.size})",
                    titleColor = BarBackerColors.Pinned,
                    borderColor = BarBackerColors.Pinned.copy(alpha = 0.5f),
                ) {
                    pending.forEachIndexed { index, member ->
                        if (index > 0) HorizontalDivider(color = BarBackerColors.Outline)
                        MemberRow(
                            icon = Icons.Filled.HourglassEmpty,
                            iconTint = BarBackerColors.Pinned,
                            name = member.displayName ?: "Unknown",
                            subtitle = member.jobTitle?.wire ?: member.role?.wire.orEmpty(),
                        ) {
                            // No confirmation on either action: both are
                            // reversible — a rejected member can request
                            // again, and an approved one can be removed.
                            OutlinedButton(onClick = { onRejectMember(member.id) }) {
                                Text("Reject")
                            }
                            Spacer(Modifier.size(8.dp))
                            Button(onClick = { onApproveMember(member.id) }) { Text("Approve") }
                        }
                    }
                }
            }

            if (isManagerPlus && ownershipClaims.isNotEmpty()) {
                RosterSection(
                    title = "OWNERSHIP CLAIMS (${ownershipClaims.size})",
                    titleColor = Color(0xFF60A5FA),
                    borderColor = Color(0xFF1E3A8A),
                ) {
                    ownershipClaims.forEachIndexed { index, claim ->
                        if (index > 0) HorizontalDivider(color = BarBackerColors.Outline)
                        MemberRow(
                            icon = Icons.Filled.Verified,
                            iconTint = Color(0xFF60A5FA),
                            name = claim.claimantName.ifBlank { "Unknown" },
                            subtitle = claim.justification.orEmpty(),
                        ) {
                            OutlinedButton(onClick = { onReviewClaim(claim.id, false) }) {
                                Text("Reject")
                            }
                            Spacer(Modifier.size(8.dp))
                            Button(onClick = { onReviewClaim(claim.id, true) }) { Text("Approve") }
                        }
                    }
                }
            }

            RosterSection(
                title = "CLOCKED IN (${clockedIn.size})",
                titleColor = Color(0xFF4ADE80),
                borderColor = BarBackerColors.Outline,
            ) {
                if (clockedIn.isEmpty()) {
                    Text(
                        text = "No one is clocked in.",
                        color = BarBackerColors.OnSurfaceVariant,
                        textAlign = TextAlign.Center,
                        modifier = Modifier.fillMaxWidth().padding(16.dp),
                    )
                } else {
                    clockedIn.forEachIndexed { index, member ->
                        if (index > 0) HorizontalDivider(color = BarBackerColors.Outline)
                        MemberRow(
                            icon = Icons.Filled.Circle,
                            iconTint = Color(0xFF22C55E),
                            name = member.displayName ?: "Unknown",
                            subtitle = member.jobTitle?.wire ?: member.role?.wire.orEmpty(),
                        )
                    }
                }
            }

            if (offClock.isNotEmpty()) {
                RosterSection(
                    title = "OFF CLOCK (${offClock.size})",
                    titleColor = BarBackerColors.OnSurfaceVariant,
                    borderColor = BarBackerColors.Outline,
                ) {
                    offClock.forEachIndexed { index, member ->
                        if (index > 0) HorizontalDivider(color = BarBackerColors.Outline)
                        MemberRow(
                            icon = Icons.Filled.RadioButtonUnchecked,
                            iconTint = BarBackerColors.OnSurfaceVariant,
                            name = member.displayName ?: "Unknown",
                            subtitle = member.jobTitle?.wire ?: member.role?.wire.orEmpty(),
                            dimmed = true,
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun RosterSection(
    title: String,
    titleColor: Color,
    borderColor: Color,
    content: @Composable () -> Unit,
) {
    Column(modifier = Modifier.fillMaxWidth()) {
        Text(
            text = title,
            style = MaterialTheme.typography.labelMedium,
            fontWeight = FontWeight.Bold,
            color = titleColor,
            letterSpacing = 1.sp,
            modifier = Modifier.padding(bottom = 8.dp),
        )
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .border(1.dp, borderColor, RoundedCornerShape(8.dp)),
        ) {
            content()
        }
    }
}

@Composable
private fun MemberRow(
    icon: ImageVector,
    iconTint: Color,
    name: String,
    subtitle: String,
    dimmed: Boolean = false,
    trailing: @Composable (() -> Unit)? = null,
) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = iconTint,
            modifier = Modifier.size(12.dp),
        )
        Spacer(Modifier.size(12.dp))
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = name,
                color = if (dimmed) BarBackerColors.OnSurfaceVariant else BarBackerColors.OnSurface,
                fontWeight = FontWeight.Medium,
            )
            if (subtitle.isNotBlank()) {
                Text(
                    text = subtitle,
                    style = MaterialTheme.typography.bodySmall,
                    color = BarBackerColors.OnSurfaceVariant,
                )
            }
        }
        trailing?.let {
            Row(verticalAlignment = Alignment.CenterVertically) { it() }
        }
    }
}
