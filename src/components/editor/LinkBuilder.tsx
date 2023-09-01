import DropDown, { DropDownItems } from "@/ui/DropDown";
import { Link, MenuScale } from "iconoir-react";
import { useContext, useEffect, useState } from "react";
import LinksMenuList, { LinksMenuListGrey } from "../shared/LinksMenuList";
import Input from "@/ui/Input";
import { SortableProps } from "./SortableLinkBuilder";
import { EditorContext } from "@/contexts/EditorContextProvider";

interface LinkBuilderProps extends SortableProps {}

function LinkBuilder({ id, index }: LinkBuilderProps) {
  const { pageData, setPageData } = useContext(EditorContext);

  const [selectedItem, setSelectedItem] = useState<DropDownItems | null>(null);

  // TODO: Update The Mobile mockup when it updates on the dropdown
  useEffect(() => {
    // comming: [{id:123, linkId:'p_1', input:''}]
    const newBuilders = pageData.builders;
    const builderIndex = newBuilders.findIndex((e) => e.id == id);
    newBuilders[builderIndex] = {
      ...newBuilders[builderIndex],
      linkId: selectedItem?.id,
    };
    setPageData({ ...pageData, builders: newBuilders });
  }, [selectedItem]);

  const handleBuilderRemove = () => {
    const newPageBuilders = pageData.builders;
    const builderIndex = newPageBuilders.findIndex(
      (builder) => builder.id == id
    );
    newPageBuilders.splice(builderIndex, 1);
    setPageData({ ...pageData, builders: newPageBuilders });
  };

  // TODO: SHOW ALL ELEMENTS BUT THOSE AREN'T AVAILABLE DISABLE THEM

  return (
    <div className="w-full bg-grey-light rounded-lg p-6 flex flex-col gap-4 cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <span className="flex flex-col gap-1">
            <span className="w-4 h-0.5 bg-grey-50"></span>
            <span className="w-4 h-0.5 bg-grey-50"></span>
          </span>
          <p className="text-grey-50 font-bold">Link #{index}</p>
        </span>
        <p
          className="text-grey-50 cursor-pointer hover:text-grey transition duration-300 ease-in-out"
          onClick={handleBuilderRemove}
        >
          Remove
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-grey-50 text-sm">Platform</label>
          <DropDown
            icon={<MenuScale />}
            placeHolder="Choose a platform"
            dropDownItems={LinksMenuListGrey.filter(
              (link) =>
                !pageData.builders.some((builder) => builder.linkId == link.id)
            )}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-grey-50 text-sm">Link</label>
          <Input
            type="text"
            icon={<Link />}
            placeholder={
              selectedItem
                ? LinksMenuList.find((e) => e.id == selectedItem.id)
                    ?.inputPlaceHolder
                : "link placeholder"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default LinkBuilder;
