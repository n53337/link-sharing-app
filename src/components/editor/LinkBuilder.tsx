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

  useEffect(() => {
    const newBuilders = pageData.builders;
    const builderIndex = newBuilders.findIndex((e) => e.id == id);

    newBuilders[builderIndex] = {
      ...newBuilders[builderIndex],
      linkId: selectedItem?.id,
    };

    const newLinks = newBuilders.map((builder) =>
      LinksMenuList.find((link) => link.id == builder.linkId)
    );

    const newLinksList: Array<DropDownItems | undefined> = [];
    for (let i = 0; i < newLinks.length; i++) {
      if (newLinks[i]) {
        newLinksList.push(newLinks[i]);
      }
    }

    setPageData({
      ...pageData,
      builders: newBuilders,
      links: newLinksList,
    });
  }, [selectedItem]);

  const handleBuilderRemove = () => {
    const newPageBuilders = pageData.builders;
    const builderIndex = newPageBuilders.findIndex(
      (builder) => builder.id == id
    );

    newPageBuilders.splice(builderIndex, 1);

    const newLinks = newPageBuilders.map((builder) =>
      LinksMenuList.find((link) => link.id == builder.linkId)
    );

    const newLinksList: Array<DropDownItems | undefined> = [];

    for (let i = 0; i < newLinks.length; i++) {
      if (newLinks[i]) {
        newLinksList.push(newLinks[i]);
      }
    }

    setPageData({
      ...pageData,
      builders: newPageBuilders,
      links: newLinksList,
    });
  };

  return (
    <div className="w-full bg-grey-light rounded-lg p-6 flex flex-col gap-4 cursor-grab active:cursor-grabbing active:shadow-btn">
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
