import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/**
 * Props for the SortableButton wrapper.
 */
interface SortableButtonProps {
  id: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

/**
 * SortableButton Component.
 *
 * A wrapper component that integrates with the `@dnd-kit` library to make
 * any button draggable and sortable.
 *
 * Used in the Bartender dashboard for rearranging buttons.
 */
export function SortableButton({ id, children, onClick, disabled }: SortableButtonProps) {
  // Hook to provide drag-and-drop primitives
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id, disabled });

  // Apply transformations (movement) during drag
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1, // Bring to front when dragging
    opacity: isDragging ? 0 : 1, // Hide original element when dragging (ghost is shown by Overlay)
    visibility: (isDragging ? 'hidden' : 'visible') as 'hidden' | 'visible',
    touchAction: 'manipulation' // Optimize for touch devices
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className="h-full w-full relative"
    >
      {children}
    </div>
  );
}
