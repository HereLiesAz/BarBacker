import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import NotificationSettings from '../components/NotificationSettings';
import { ButtonConfig } from '../types';

// Mock dependencies
const mockOnClose = vi.fn();
const mockOnSave = vi.fn();

const MOCK_BUTTONS: ButtonConfig[] = [
    { id: 'ice', label: 'ICE', icon: 'ac_unit' },
    { id: 'glass', label: 'GLASSWARE', icon: 'wine_bar' },
    { id: 'security', label: 'SECURITY', icon: 'security' }
];

describe('NotificationSettings', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders all buttons', () => {
        render(
            <NotificationSettings
                open={true}
                onClose={mockOnClose}
                onSave={mockOnSave}
                userRole="Bartender"
                currentPreferences={['ice', 'glass']}
                allButtons={MOCK_BUTTONS}
            />
        );

        expect(screen.getByText('ICE')).toBeInTheDocument();
        expect(screen.getByText('GLASSWARE')).toBeInTheDocument();
        expect(screen.getByText('SECURITY')).toBeInTheDocument();
    });

    it('shows current preferences as enabled', () => {
        // We can't easily check the switch state directly because it's a web component (md-switch).
        // But we can check if clicking it toggles the state.
        // Or we can trust the component logic if we test the toggle interaction.

        // Let's rely on the save behavior to verify state.
        render(
            <NotificationSettings
                open={true}
                onClose={mockOnClose}
                onSave={mockOnSave}
                userRole="Bartender"
                currentPreferences={['ice']} // Only ICE enabled
                allButtons={MOCK_BUTTONS}
            />
        );

        // Click Save immediately
        fireEvent.click(screen.getByText('Save'));
        expect(mockOnSave).toHaveBeenCalledWith(['ice'], '');
    });

    it('toggles preferences', async () => {
        render(
            <NotificationSettings
                open={true}
                onClose={mockOnClose}
                onSave={mockOnSave}
                userRole="Bartender"
                currentPreferences={['ice']}
                allButtons={MOCK_BUTTONS}
            />
        );

        // Find the list item for "SECURITY" (currently disabled)
        // The switch is inside the list item.
        // We can click the switch.
        // Since we can't easily select by role 'switch' for web components sometimes,
        // let's try finding the md-switch element.

        // Note: In JSDOM with custom elements, events might be tricky.
        // The component has `onClick={() => handleToggle(btn.id, !isEnabled)}` on the switch.

        // We need to find the switch element associated with "SECURITY".
        // Using closest or traversing.
        const securityItem = screen.getByText('SECURITY').closest('md-list-item');
        const switchEl = securityItem?.querySelector('md-switch');

        if (!switchEl) throw new Error('Switch not found');

        await act(async () => {
            fireEvent.click(switchEl);
        });

        // Save
        fireEvent.click(screen.getByText('Save'));

        // Should now include 'ice' and 'security'
        expect(mockOnSave).toHaveBeenCalledWith(['ice', 'security'], '');
    });

    it('resets to defaults', async () => {
        // Mock the defaults import?
        // Actually, the component imports constants. We can't easily mock that without vi.mock.
        // But we know Bartender defaults include 'ice' and 'glass'.

        render(
            <NotificationSettings
                open={true}
                onClose={mockOnClose}
                onSave={mockOnSave}
                userRole="Bartender"
                currentPreferences={[]} // Start with nothing
                allButtons={MOCK_BUTTONS}
            />
        );

        await act(async () => {
             fireEvent.click(screen.getByText('Reset to Default'));
        });

        fireEvent.click(screen.getByText('Save'));

        // Verify against actual defaults for Bartender (ice, glass, fruit, restock, keg, trash)
        // Our MOCK_BUTTONS only has 'ice' and 'glass'.
        // The component uses the IDs.
        // The result will contain ALL default IDs, even if not in MOCK_BUTTONS (because it just returns the array).
        const saved = mockOnSave.mock.calls[0][0] as string[];
        expect(saved).toContain('ice');
        expect(saved).toContain('glass');
        expect(saved).toContain('keg'); // Default
        expect(saved).not.toContain('security'); // Bartender doesn't have security default
    });
});
