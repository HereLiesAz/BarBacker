import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCenter,
} from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { SortableButton } from './SortableButton';
import type { ButtonConfig } from '../types';

interface SubMenuOverlayProps {
  navStack: ButtonConfig[];
  currentButtons: ButtonConfig[];
  currentContextId: string;
  activeId: string | null;
  sensors: ReturnType<typeof import('@dnd-kit/core').useSensors>;
  onDragStart: (event: DragStartEvent) => void;
  onDragOver: (event: DragEndEvent, contextId: string, items: ButtonConfig[]) => void;
  onDragEnd: (event: DragEndEvent, contextId: string) => void;
  onButtonClick: (btn: ButtonConfig) => void;
  onClose: () => void;
}

// Modal overlay shown when the user has drilled into a nested
// button menu. Renders breadcrumbs, the draggable button grid for
// the current sub-context, and a Cancel button. Pure presentation —
// the dnd-kit hookups and the click handler are wired from the
// parent.
export function SubMenuOverlay({
  navStack,
  currentButtons,
  currentContextId,
  activeId,
  sensors,
  onDragStart,
  onDragOver,
  onDragEnd,
  onButtonClick,
  onClose,
}: SubMenuOverlayProps) {
  if (navStack.length === 0) return null;

  return (
    <div className="fixed inset-0 top-[88px] z-50 bg-black/95 flex items-start justify-center p-4 pt-10 animate-in fade-in duration-200 backdrop-blur-sm">
      <div className="bg-[#121212] w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 rounded-2xl border border-gray-800 shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 mb-4 flex-none border-b border-gray-800 pb-4">
          <md-icon-button onClick={onClose}>
            <md-icon>arrow_back</md-icon>
          </md-icon-button>
          <span className="text-lg font-bold text-white uppercase tracking-wide truncate flex-1">
            {navStack.map(b => b.label).join(' > ')}
          </span>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={onDragStart}
          onDragOver={(e) => onDragOver(e, currentContextId, currentButtons)}
          onDragEnd={(e) => onDragEnd(e, currentContextId)}
        >
          <SortableContext items={currentButtons} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-2 gap-4 mb-auto">
              {currentButtons.map(btn => (
                <SortableButton key={btn.id} id={btn.id} onClick={() => onButtonClick(btn)}>
                  <md-filled-tonal-button
                    style={{
                      height: '100px',
                      fontSize: '18px',
                      width: '100%',
                      pointerEvents: 'none',
                      border: '8px solid #000000',
                      boxSizing: 'border-box',
                    }}
                  >
                    <span className="text-red-500 font-bold text-3xl">{btn.label}</span>
                  </md-filled-tonal-button>
                </SortableButton>
              ))}
            </div>
          </SortableContext>
          <DragOverlay>
            {activeId ? (
              <md-filled-tonal-button
                style={{
                  height: '100px',
                  fontSize: '18px',
                  width: '100%',
                  pointerEvents: 'none',
                  opacity: 0.9,
                }}
              >
                {currentButtons.find(b => b.id === activeId)?.label}
              </md-filled-tonal-button>
            ) : null}
          </DragOverlay>
        </DndContext>

        <div className="mt-6 flex-none">
          <md-outlined-button className="w-full" onClick={onClose} style={{ height: '56px' }}>
            Cancel
          </md-outlined-button>
        </div>
      </div>
    </div>
  );
}
