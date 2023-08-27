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
  const [items, setItems] = useState([1]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setItems((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 150, tolerance: 100 },
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
