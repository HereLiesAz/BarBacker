// Import utilities from dnd-kit for sorting logic.
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Define props.
interface SortableButtonProps {
  id: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

// A wrapper component that makes its children sortable (drag-and-drop).
export function SortableButton({ id, children, onClick, disabled }: SortableButtonProps) {
  // Use the useSortable hook to get drag attributes.
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id, disabled });

  // Apply styles based on drag state.
  const style = {
    // Apply the transform (movement) using CSS utilities.
    transform: CSS.Transform.toString(transform),
    transition,
    // Raise z-index when dragging.
    zIndex: isDragging ? 10 : 1,
    // Hide the original element while dragging (the DragOverlay handles the visual).
    opacity: isDragging ? 0 : 1,
    visibility: (isDragging ? 'hidden' : 'visible') as 'hidden' | 'visible',
    // Optimize touch actions.
    touchAction: 'manipulation'
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      // Spread dnd-kit props.
      {...attributes}
      {...listeners}
      onClick={onClick}
      className="h-full w-full relative"
    >
      {children}
    </div>
  );
}
