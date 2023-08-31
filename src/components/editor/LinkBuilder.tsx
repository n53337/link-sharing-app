import DropDown from "@/ui/DropDown";
import { Link, MenuScale } from "iconoir-react";
import { useEffect, useState } from "react";
import LinksMenuList, { LinksMenuListGrey } from "../shared/LinksMenuList";
import Input from "@/ui/Input";
import { SortableProps } from "./SortableLinkBuilder";

interface LinkBuilderProps extends SortableProps {}

function LinkBuilder({ id, linkItem, index }: LinkBuilderProps) {
  const [selectedItem, setSelectedItem] = useState(linkItem);

  // TODO: Update The Mobile mockup when it updates on the dropdown
  useEffect(() => {}, []);

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
        <p className="text-grey-50 cursor-pointer hover:text-grey transition duration-300 ease-in-out">
          Remove
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-grey-50 text-sm">Platform</label>
          <DropDown
            icon={<MenuScale />}
            placeHolder="Choose a platform"
            dropDownItems={LinksMenuListGrey}
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
              LinksMenuList.find((e) => e.id == selectedItem.id)
                ?.inputPlaceHolder
            }
          />
        </div>
      </div>
    </div>
  );
}

export default LinkBuilder;
