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
import { useContext, useEffect, useRef } from "react";
import SortableLinkBuilder from "./SortableLinkBuilder";
import { EditorContext } from "@/contexts/EditorContextProvider";
import { DropDownItems } from "@/ui/DropDown";
import LinksMenuList from "../shared/LinksMenuList";

function LinkBuilderArea() {
  const { pageData, setPageData } = useContext(EditorContext);
  const { builders } = pageData;

  // const [links, setLinks] = useState([1, 2]);

  const newLinkRef = useRef(null);

  useEffect(() => {
    if (newLinkRef.current) {
      newLinkRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [pageData]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setPageData((pageData) => {
        const activeIndex = pageData.builders.findIndex(
          (item) => item.id == active.id
        );

        const overIndex = pageData.builders.findIndex(
          (item) => item.id == over.id
        );

        const newBuilders = arrayMove(
          pageData.builders,
          activeIndex,
          overIndex
        );

        const newLinks = newBuilders.map((builder) =>
          LinksMenuList.find((link) => link.id == builder.linkId)
        );

        const newLinksList: Array<DropDownItems | undefined> = [];
        for (let i = 0; i < newLinks.length; i++) {
          if (newLinks[i]) {
            newLinksList.push(newLinks[i]);
          }
        }

        const newPageData = {
          ...pageData,
          builders: newBuilders,
          links: newLinksList,
        };
        return newPageData;
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 140, tolerance: 10 },
    })
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className="flex flex-col gap-4">
        <SortableContext
          items={builders}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {builders.map((item, index) => (
            <SortableLinkBuilder key={item.id} index={index + 1} id={item.id} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}

export default LinkBuilderArea;
