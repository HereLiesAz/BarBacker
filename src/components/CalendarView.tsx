import { useState } from 'react';
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import { CalendarEvent } from '../types';
import { MdDialog } from './MdDialog';

interface CalendarViewProps {
  open: boolean;
  onClose: () => void;
  events: CalendarEvent[];
  isManagerPlus: boolean;
  onCreate: (event: Omit<CalendarEvent, 'id'>) => Promise<void>;
  onUpdate: (eventId: string, patch: Partial<CalendarEvent>) => Promise<void>;
  onDelete: (eventId: string) => Promise<void>;
}

const TYPE_COLORS: Record<string, string> = {
  shift: 'bg-blue-500',
  booking: 'bg-purple-500',
  event: 'bg-green-500',
};

function toLocalInputValue(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// Calendar view — Phase 4. Agenda-style chronological list rather
// than a full month/week grid: the data model, sync, and permissions
// underneath are all real, but the grid visualization is a deliberate
// scope trim given the size of the rest of this phase. Manager+ can
// create/edit/delete local events; externally-owned events (synced
// from Google or an iCal subscription) render read-only with a badge.
export function CalendarView({ open, onClose, events, isManagerPlus, onCreate, onUpdate, onDelete }: CalendarViewProps) {
  const [editing, setEditing] = useState<CalendarEvent | 'new' | null>(null);
  const [form, setForm] = useState({ title: '', start: '', end: '', type: 'event', description: '' });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const upcoming = [...events].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  const openNew = () => {
    const now = new Date();
    const later = new Date(now.getTime() + 60 * 60 * 1000);
    setForm({ title: '', start: toLocalInputValue(now.toISOString()), end: toLocalInputValue(later.toISOString()), type: 'event', description: '' });
    setEditing('new');
  };

  const openEdit = (event: CalendarEvent) => {
    setForm({ title: event.title, start: toLocalInputValue(event.start), end: toLocalInputValue(event.end), type: event.type, description: event.description ?? '' });
    setEditing(event);
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.start || !form.end) return;
    setSaving(true);
    setSaveError(null);
    try {
      const payload = {
        title: form.title.trim(),
        start: new Date(form.start).toISOString(),
        end: new Date(form.end).toISOString(),
        type: form.type,
        ...(form.description.trim() ? { description: form.description.trim() } : {}),
      };
      if (editing === 'new') await onCreate(payload);
      else if (editing) await onUpdate(editing.id, payload);
      setEditing(null);
    } catch (e) {
      // Previously uncaught — onCreate/onUpdate rejecting (permission
      // denied, offline) surfaced nothing at all: the dialog just sat
      // there with the Save button re-enabled and no indication
      // anything had gone wrong.
      console.error('Failed to save calendar event', e);
      setSaveError('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!confirmDeleteId) return;
    try {
      await onDelete(confirmDeleteId);
    } catch (e) {
      console.error('Failed to delete calendar event', e);
      alert('Failed to delete. Please try again.');
    } finally {
      setConfirmDeleteId(null);
    }
  };

  return (
    <>
      <MdDialog open={open} onClose={onClose}>
        <div slot="headline">Calendar</div>
        <div slot="content" className="flex flex-col gap-2 min-w-[320px] max-h-[60vh] overflow-y-auto">
          {isManagerPlus && (
            <md-filled-button onClick={openNew}>Add Event</md-filled-button>
          )}
          {upcoming.length === 0 && <div className="text-center text-gray-500 py-4">No events.</div>}
          {upcoming.map((event) => {
            const isExternal = !!event.externalProvider;
            const canEdit = isManagerPlus && !isExternal;
            return (
              <div key={event.id} className="flex items-start gap-2 p-2 border border-gray-800 rounded">
                <span className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${TYPE_COLORS[event.type] ?? 'bg-gray-500'}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium">{event.title}</div>
                  <div className="text-xs text-gray-400">
                    {new Date(event.start).toLocaleString()} – {new Date(event.end).toLocaleString()}
                  </div>
                  {event.description && <div className="text-xs text-gray-500">{event.description}</div>}
                  {isExternal && <div className="text-[10px] text-gray-600 uppercase">synced from {event.externalProvider}</div>}
                </div>
                {canEdit && (
                  <div className="flex flex-col gap-1 shrink-0">
                    <md-text-button onClick={() => openEdit(event)}>Edit</md-text-button>
                    <md-text-button onClick={() => setConfirmDeleteId(event.id)}>Delete</md-text-button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div slot="actions">
          <md-text-button onClick={onClose}>Close</md-text-button>
        </div>
      </MdDialog>

      <MdDialog open={editing !== null} onClose={() => setEditing(null)}>
        <div slot="headline">{editing === 'new' ? 'Add Event' : 'Edit Event'}</div>
        <div slot="content" className="flex flex-col gap-3 min-w-[300px]">
          <md-filled-text-field label="Title" value={form.title}
            onInput={(e: any) => setForm((f) => ({ ...f, title: e.target.value }))} />
          <input type="datetime-local" className="bg-gray-800 text-white rounded p-2" value={form.start}
            onChange={(e) => setForm((f) => ({ ...f, start: e.target.value }))} />
          <input type="datetime-local" className="bg-gray-800 text-white rounded p-2" value={form.end}
            onChange={(e) => setForm((f) => ({ ...f, end: e.target.value }))} />
          <select className="bg-gray-800 text-white rounded p-2" value={form.type}
            onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}>
            <option value="event">Event</option>
            <option value="shift">Shift</option>
            <option value="booking">Booking</option>
          </select>
          <md-filled-text-field label="Description" value={form.description}
            onInput={(e: any) => setForm((f) => ({ ...f, description: e.target.value }))} />
          {saveError && <div className="text-xs text-red-400">{saveError}</div>}
        </div>
        <div slot="actions">
          <md-text-button onClick={() => setEditing(null)}>Cancel</md-text-button>
          <md-filled-button disabled={!form.title.trim() || saving || undefined} onClick={handleSave}>
            {saving ? 'Saving…' : 'Save'}
          </md-filled-button>
        </div>
      </MdDialog>

      <MdDialog open={confirmDeleteId !== null} onClose={() => setConfirmDeleteId(null)}>
        <div slot="headline">Delete Event?</div>
        <div slot="content">This can't be undone.</div>
        <div slot="actions">
          <md-text-button onClick={() => setConfirmDeleteId(null)}>Cancel</md-text-button>
          <md-filled-button className="btn-alert" onClick={handleConfirmDelete}>Delete</md-filled-button>
        </div>
      </MdDialog>
    </>
  );
}

export default CalendarView;
