import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableLinkBuilder from "./SortableLinkBuilder";

function LinkBuilderArea() {
  const [items, setItems] = useState(["github", "youtube", "linkedin"]);

  const handleDragEnd = () => {
    console.log("Drag end");
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 200, tolerance: 100 },
    })
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className="flex flex-col gap-4">
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {/* We need components that use the useSortable hook */}
          {items.map((item) => (
            <SortableLinkBuilder key={item} id={item} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}

export default LinkBuilderArea;
