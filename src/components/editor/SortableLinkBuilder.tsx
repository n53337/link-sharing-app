import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import LinkBuilder from "./LinkBuilder";

export interface SortableProps {
  id: UniqueIdentifier;
  index: number;
}
function SortableLinkBuilder({ id, index }: SortableProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <LinkBuilder id={id} index={index} />
    </div>
  );
}

export default SortableLinkBuilder;
