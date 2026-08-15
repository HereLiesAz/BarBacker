import { useEffect, useRef, useState } from 'react';
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/textfield/filled-text-field.js';
import { ChatMessage } from '../types';
import { MdDialog } from './MdDialog';

interface ChatPanelProps {
  open: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  hasMore: boolean;
  loadingMore: boolean;
  onLoadMore: () => void;
  currentUserId: string;
  isManagerPlus: boolean;
  onSend: (text: string, pin: boolean) => Promise<void>;
  onTogglePin: (messageId: string, pin: boolean) => void;
  onDelete: (messageId: string) => void;
}

// Full-screen chat sheet — Phase 2 of
// docs/plans/2026-05-21-feature-set-purr-design.md. Any bar member
// can post; Manager+ can pin (pinned messages drive the dashboard
// marquee) and delete any message; everyone can delete their own.
// Text is immutable once posted — there is no edit affordance.
export function ChatPanel({
  open, onClose, messages, hasMore, loadingMore, onLoadMore,
  currentUserId, isManagerPlus, onSend, onTogglePin, onDelete,
}: ChatPanelProps) {
  const [text, setText] = useState('');
  const [pinNext, setPinNext] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const stickToBottomRef = useRef(true);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el && stickToBottomRef.current) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, open]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    stickToBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
  };

  const handleSend = async () => {
    if (!text.trim() || sending) return;
    setSending(true);
    setSendError(null);
    try {
      await onSend(text, pinNext);
      // Only clear the composer once the write actually lands — on
      // failure (most commonly a rules rejection) the typed text
      // stays put instead of silently vanishing as if it had sent.
      setText('');
      setPinNext(false);
      stickToBottomRef.current = true;
    } catch (e) {
      setSendError(e instanceof Error ? e.message : 'Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <MdDialog
      open={open}
      onClose={onClose}
      style={{ '--md-dialog-container-max-width': '100vw', '--md-dialog-container-max-height': '100vh' } as React.CSSProperties}
      className="chat-panel-dialog"
    >
      <div slot="headline">Chat</div>
      <div slot="content" className="flex flex-col" style={{ width: '90vw', maxWidth: 640, height: '70vh' }}>
        <div ref={scrollRef} onScroll={handleScroll} className="flex-1 overflow-y-auto flex flex-col gap-3 pr-1">
          {hasMore && (
            <div className="text-center">
              <md-text-button disabled={loadingMore} onClick={onLoadMore}>
                {loadingMore ? 'Loading…' : 'Load earlier messages'}
              </md-text-button>
            </div>
          )}
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-8">No messages yet. Say hello.</div>
          )}
          {messages.map((m) => {
            const isOwn = m.authorId === currentUserId;
            const canDelete = isOwn || isManagerPlus;
            return (
              <div key={m.id} className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="font-medium text-gray-300">{m.authorName || 'Unknown'}</span>
                  {m.authorRole && (
                    <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[10px] uppercase tracking-wide">
                      {m.authorRole}
                    </span>
                  )}
                  {m.pinned && <md-icon style={{ fontSize: 14 }} className="text-yellow-500">push_pin</md-icon>}
                </div>
                <div className={`rounded-lg px-3 py-2 max-w-[85%] ${m.pinned ? 'bg-yellow-900/30 border border-yellow-800' : 'bg-gray-800'}`}>
                  <span className="text-white whitespace-pre-wrap break-words">{m.text}</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {isManagerPlus && (
                    <md-text-button onClick={() => onTogglePin(m.id, !m.pinned)}>
                      {m.pinned ? 'Unpin' : 'Pin'}
                    </md-text-button>
                  )}
                  {canDelete && (
                    <md-text-button onClick={() => onDelete(m.id)}>Delete</md-text-button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {sendError && <div className="text-xs text-red-400 pt-1">{sendError}</div>}
        <div className="flex items-end gap-2 pt-3 border-t border-gray-800">
          <md-filled-text-field
            label="Message"
            value={text}
            className="flex-1"
            onInput={(e: React.FormEvent<HTMLElement>) =>
              setText((e.currentTarget as HTMLElement & { value: string }).value)}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
            }}
          />
          {isManagerPlus && (
            <md-icon-button
              onClick={() => setPinNext((p) => !p)}
              aria-label={pinNext ? 'Message will be pinned' : 'Pin this message'}
              className={pinNext ? 'text-yellow-500' : 'text-gray-400'}
            >
              <md-icon>push_pin</md-icon>
            </md-icon-button>
          )}
          <md-filled-button disabled={sending || undefined} onClick={handleSend}>
            {sending ? 'Sending…' : 'Send'}
          </md-filled-button>
        </div>
      </div>
      <div slot="actions">
        <md-text-button onClick={onClose}>Close</md-text-button>
      </div>
    </MdDialog>
  );
}

export default ChatPanel;
