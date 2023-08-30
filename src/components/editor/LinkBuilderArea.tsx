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
import { useContext } from "react";
import SortableLinkBuilder from "./SortableLinkBuilder";
import { EditorContext } from "@/contexts/EditorContextProvider";

function LinkBuilderArea() {
  const { pageData, setPageData } = useContext(EditorContext);
  const { links } = pageData;

  // const [links, setLinks] = useState([1, 2]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setPageData((pageData) => {
        const activeIndex = pageData.links.findIndex(
          (item) => item.id == active.id
        );
        const overIndex = pageData.links.findIndex(
          (item) => item.id == over.id
        );
        const newPageData = {
          ...pageData,
          links: arrayMove(pageData.links, activeIndex, overIndex),
        };
        return newPageData;
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 150, tolerance: 10 },
    })
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className="flex flex-col gap-4">
        <SortableContext items={links} strategy={verticalListSortingStrategy}>
          {/* We need components that use the useSortable hook */}
          {links.map((item) => (
            <SortableLinkBuilder key={item.id} id={item.id} linkItem={item} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}

export default LinkBuilderArea;
