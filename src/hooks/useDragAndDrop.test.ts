import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

const mockUpdateDoc = vi.fn().mockResolvedValue(undefined);
vi.mock('firebase/firestore', () => ({
  doc: vi.fn(),
  updateDoc: (...args: unknown[]) => mockUpdateDoc(...args),
}));
vi.mock('../firebase', () => ({ db: {} }));

import { useDragAndDrop } from './useDragAndDrop';

describe('useDragAndDrop', () => {
  it('handleDragStart sets activeId and isDraggingRef', () => {
    const setCustomOrders = vi.fn();
    const { result } = renderHook(() =>
      useDragAndDrop({ barId: 'bar1', customOrders: {}, setCustomOrders })
    );

    act(() => {
      result.current.handleDragStart({ active: { id: 'btn1' } } as any);
    });

    expect(result.current.activeId).toBe('btn1');
    expect(result.current.isDraggingRef.current).toBe(true);
  });

  // Regression: dnd-kit fires onDragCancel instead of onDragEnd when a
  // drag is cancelled (Escape key, the draggable unmounting mid-drag,
  // etc.). Without a handler for it, isDraggingRef stayed stuck at
  // `true` forever, which permanently blocked this client from ever
  // applying another remote customOrders update again (see the bar
  // listener effect in App.tsx, which skips the update while dragging
  // to avoid clobbering an in-progress local reorder).
  it('handleDragCancel resets activeId and isDraggingRef without writing to Firestore', () => {
    const setCustomOrders = vi.fn();
    const { result } = renderHook(() =>
      useDragAndDrop({ barId: 'bar1', customOrders: { main: ['a', 'b'] }, setCustomOrders })
    );

    act(() => {
      result.current.handleDragStart({ active: { id: 'btn1' } } as any);
    });
    expect(result.current.isDraggingRef.current).toBe(true);

    act(() => {
      result.current.handleDragCancel({} as any);
    });

    expect(result.current.activeId).toBeNull();
    expect(result.current.isDraggingRef.current).toBe(false);
    expect(mockUpdateDoc).not.toHaveBeenCalled();
  });

  it('handleDragEnd resets isDraggingRef and persists the order', async () => {
    const setCustomOrders = vi.fn();
    const { result } = renderHook(() =>
      useDragAndDrop({ barId: 'bar1', customOrders: { main: ['a', 'b'] }, setCustomOrders })
    );

    act(() => {
      result.current.handleDragStart({ active: { id: 'btn1' } } as any);
    });

    await act(async () => {
      await result.current.handleDragEnd({} as any, 'main');
    });

    expect(result.current.isDraggingRef.current).toBe(false);
    expect(mockUpdateDoc).toHaveBeenCalledTimes(1);
  });
});
