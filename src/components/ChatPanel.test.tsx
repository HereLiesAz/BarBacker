import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ChatPanel } from './ChatPanel';
import { ChatMessage } from '../types';

const mockOnClose = vi.fn();
const mockOnLoadMore = vi.fn();
const mockOnSend = vi.fn();
const mockOnTogglePin = vi.fn();
const mockOnDelete = vi.fn();

const baseMessage: ChatMessage = {
  id: 'm1',
  text: 'Hello team',
  authorId: 'alice',
  authorName: 'Alice',
  authorRole: 'Staff',
  timestamp: { toMillis: () => 0 } as any,
  pinned: false,
};

function renderPanel(overrides: Partial<React.ComponentProps<typeof ChatPanel>> = {}) {
  return render(
    <ChatPanel
      open={true}
      onClose={mockOnClose}
      messages={[baseMessage]}
      hasMore={false}
      loadingMore={false}
      onLoadMore={mockOnLoadMore}
      currentUserId="alice"
      isManagerPlus={false}
      onSend={mockOnSend}
      onTogglePin={mockOnTogglePin}
      onDelete={mockOnDelete}
      {...overrides}
    />
  );
}

describe('ChatPanel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders messages with author name and text', () => {
    renderPanel();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Hello team')).toBeInTheDocument();
  });

  it('shows an empty state when there are no messages', () => {
    renderPanel({ messages: [] });
    expect(screen.getByText(/no messages yet/i)).toBeInTheDocument();
  });

  it('lets the author delete their own message even when not Manager+', () => {
    renderPanel({ isManagerPlus: false, currentUserId: 'alice' });
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith('m1');
  });

  it('hides delete for a non-author, non-Manager+ viewer', () => {
    renderPanel({ isManagerPlus: false, currentUserId: 'bob' });
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });

  it('hides pin/unpin controls for non-Manager+ viewers', () => {
    renderPanel({ isManagerPlus: false, currentUserId: 'bob' });
    expect(screen.queryByText('Pin')).not.toBeInTheDocument();
    expect(screen.queryByText('Unpin')).not.toBeInTheDocument();
  });

  it('shows Pin for Manager+ on an unpinned message and Unpin on a pinned one', () => {
    renderPanel({ isManagerPlus: true, messages: [baseMessage, { ...baseMessage, id: 'm2', pinned: true }] });
    expect(screen.getByText('Pin')).toBeInTheDocument();
    expect(screen.getByText('Unpin')).toBeInTheDocument();
  });

  it('calls onTogglePin with the toggled value', () => {
    renderPanel({ isManagerPlus: true });
    fireEvent.click(screen.getByText('Pin'));
    expect(mockOnTogglePin).toHaveBeenCalledWith('m1', true);
  });

  it('sends a message and clears the input', () => {
    const { container } = renderPanel();
    const input = container.querySelector('md-filled-text-field') as any;
    input.value = 'New message';
    fireEvent.input(input);
    fireEvent.click(screen.getByText('Send'));
    expect(mockOnSend).toHaveBeenCalledWith('New message', false);
  });

  it('does not send a blank message', () => {
    renderPanel();
    fireEvent.click(screen.getByText('Send'));
    expect(mockOnSend).not.toHaveBeenCalled();
  });

  it('shows a "Load earlier messages" control only when hasMore is true', () => {
    const { rerender } = renderPanel({ hasMore: false });
    expect(screen.queryByText(/load earlier/i)).not.toBeInTheDocument();
    rerender(
      <ChatPanel
        open={true}
        onClose={mockOnClose}
        messages={[baseMessage]}
        hasMore={true}
        loadingMore={false}
        onLoadMore={mockOnLoadMore}
        currentUserId="alice"
        isManagerPlus={false}
        onSend={mockOnSend}
        onTogglePin={mockOnTogglePin}
        onDelete={mockOnDelete}
      />
    );
    fireEvent.click(screen.getByText(/load earlier/i));
    expect(mockOnLoadMore).toHaveBeenCalled();
  });
});
