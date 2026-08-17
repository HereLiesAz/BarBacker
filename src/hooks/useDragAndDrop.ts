import { useRef, useState } from 'react';
import {
  TouchSensor,
  MouseSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragCancelEvent,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import type { ButtonConfig } from '../types';

interface UseDragAndDropArgs {
  barId: string | null;
  customOrders: Record<string, string[]>;
  setCustomOrders: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
}

// Sensors + drag handlers + customOrders persistence for the button
// grid. Reorders happen optimistically in `handleDragOver` (so the
// drag preview tracks the pointer in real time) and only commit to
// Firestore on `handleDragEnd`.
//
// Touch sensor uses a 250ms long-press so casual taps don't enter
// drag mode; mouse sensor requires 10px movement so click-throughs
// reach SortableButton's onClick.
export function useDragAndDrop({ barId, customOrders, setCustomOrders }: UseDragAndDropArgs) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const isDraggingRef = useRef(false);

  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
    useSensor(MouseSensor, {
      activationConstraint: { distance: 10 },
    }),
    // Without this, reordering has no keyboard-operable path at all —
    // SortableButton is focusable (dnd-kit gives it tabIndex=0) but
    // Space/arrow-key pickup only works if a KeyboardSensor is
    // registered here.
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    isDraggingRef.current = true;
  };

  const handleDragOver = (event: DragEndEvent, contextId: string, items: ButtonConfig[]) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      const newOrder = arrayMove(items, oldIndex, newIndex).map(i => i.id);
      setCustomOrders(prev => ({ ...prev, [contextId]: newOrder }));
    }
  };

  const handleDragEnd = async (_event: DragEndEvent, contextId: string) => {
    setActiveId(null);
    isDraggingRef.current = false;
    if (barId && customOrders[contextId]) {
      await updateDoc(doc(db, 'bars', barId), {
        [`customOrders.${contextId}`]: customOrders[contextId],
      });
    }
  };

  // dnd-kit fires onDragCancel (Escape key, the draggable unmounting
  // mid-drag, etc.) INSTEAD OF onDragEnd — without a handler wired to
  // it, isDraggingRef stayed stuck at `true` forever after any
  // cancelled drag, since only handleDragEnd ever reset it. The bar
  // listener effect in App.tsx skips applying a remote customOrders
  // update while `isDraggingRef.current` is true (so it doesn't
  // clobber an in-progress local reorder) — once stuck, that made
  // this client permanently stop picking up anyone else's button
  // reordering for the rest of the session. No Firestore write here:
  // a cancelled drag shouldn't persist whatever order handleDragOver
  // had optimistically applied.
  const handleDragCancel = (_event: DragCancelEvent) => {
    setActiveId(null);
    isDraggingRef.current = false;
  };

  return {
    sensors,
    activeId,
    isDraggingRef,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
  };
}
