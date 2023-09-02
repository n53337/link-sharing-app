import { LinksMenuListGrey } from "@/components/shared/LinksMenuList";
import { EditorContext } from "@/contexts/EditorContextProvider";
import clsx from "clsx";
import { NavArrowDown, NavArrowUp } from "iconoir-react";
import {
  ComponentProps,
  Dispatch,
  Key,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface DropDownItems {
  id: Key;
  icon: ReactElement;
  item: string;
  bgColor?: string;
  arrowColor?: string;
  border?: string;
  inputPlaceHolder?: string;
  linkHref?: string;
}

interface DropDownProps extends ComponentProps<"div"> {
  icon?: ReactElement;
  disabled?: boolean;
  placeHolder: string;
  dropDownItems: Array<DropDownItems>;
  selectedItem: DropDownItems | null;
  setSelectedItem: Dispatch<SetStateAction<DropDownItems | null>>;
}

export default function DropDown({
  icon,
  disabled,
  placeHolder,
  dropDownItems,
  selectedItem,
  setSelectedItem,
  ...rest
}: DropDownProps) {
  const { pageData } = useContext(EditorContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropDownStyles = clsx({
    "py-3 w-full relative border rounded-lg text-grey outline-purple-10 font-normal placeholder:opacity-50 placeholder:text-grey border-grey-10 focus:border-purple focus:shadow-btn transition duration-300 ease-in-out":
      true,
    "px-10": icon,
    "px-4": !icon,
    "cursor-pointer": !disabled,
    "opacity-50 cursor-not-allowed": disabled,
    "border-purple shadow-btn": isOpen,
  });

  const dropDownNavIconProps = {
    className: "absolute top-3 right-4",
    width: 26,
    height: 26,
    color: "#633CFF",
    strokeWidth: 2,
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div
        {...rest}
        className={dropDownStyles}
        onClick={!disabled ? () => setIsOpen(!isOpen) : () => {}}
      >
        {selectedItem ? (
          <span className="absolute top-4 left-4">
            {LinksMenuListGrey.find((e) => e.id == selectedItem.id)?.icon}
          </span>
        ) : (
          <span className="absolute top-4 left-4">{icon}</span>
        )}
        {/* {icon ? <span className="absolute top-4 left-4">{icon}</span> : null} */}
        {!selectedItem ? (
          <p>{placeHolder}</p>
        ) : (
          <p>{LinksMenuListGrey.find((e) => e.id == selectedItem.id)?.item}</p>
        )}
        {isOpen ? (
          <NavArrowUp {...dropDownNavIconProps} />
        ) : (
          <NavArrowDown {...dropDownNavIconProps} />
        )}
      </div>
      {isOpen ? (
        <div className="w-full h-64 overflow-auto flex flex-col divide-y border border-grey-10 rounded-lg shadow-drop-down">
          {LinksMenuListGrey.map((item) => (
            <div key={item.id}>
              {!pageData.builders.some(
                (builder) => builder.linkId == item.id
              ) || selectedItem?.id == item.id ? (
                <div
                  key={item.id}
                  className="flex items-center gap-1 px-4 py-3 cursor-pointer hover:bg-purple-10 transition duration-300 ease-in-out"
                  onClick={() => {
                    setSelectedItem(item);
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                  <p
                    className={`font-normal pl-1 ${
                      selectedItem?.id == item.id ? "text-purple" : "text-grey"
                    }`}
                  >
                    {item.item}
                  </p>
                  {selectedItem?.id == item.id ? (
                    <p className="font-normal text-purple">(selected)</p>
                  ) : null}
                </div>
              ) : (
                <div
                  key={item.id}
                  className="flex items-center gap-1 px-4 py-3 cursor-not-allowed hover:bg-purple-10 transition duration-300 ease-in-out"
                >
                  {item.icon}
                  <p className={`font-normal pl-1 text-grey-50`}>{item.item}</p>
                  <p className="font-normal text-grey-50">- already selected</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
