import clsx from "clsx";
import { NavArrowDown, NavArrowUp } from "iconoir-react";
import { ComponentProps, Key, ReactElement, useState } from "react";

export interface DropDownItems {
  id: Key;
  icon: ReactElement;
  item: String;
}

interface DropDownProps extends ComponentProps<"div"> {
  icon?: ReactElement;
  disabled?: boolean;
  dropDownItems: Array<DropDownItems>;
  selectedItem: Number | null;
  setSelectedItem: any;
}

export default function DropDown({
  icon,
  disabled,
  dropDownItems,
  selectedItem,
  setSelectedItem,
  ...rest
}: DropDownProps) {
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
        {icon ? <span className="absolute top-4 left-4">{icon}</span> : null}
        <p>Dropdown Field Active</p>
        {isOpen ? (
          <NavArrowUp {...dropDownNavIconProps} />
        ) : (
          <NavArrowDown {...dropDownNavIconProps} />
        )}
      </div>
      {isOpen ? (
        <div className="w-full flex flex-col divide-y border border-grey-10 rounded-lg shadow-drop-down">
          {dropDownItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-1 p-3 cursor-pointer hover:bg-purple-10 transition duration-300 ease-in-out"
              onClick={() => setSelectedItem(item.id)}
            >
              {item.icon}
              <p
                className={`font-normal pl-3 ${
                  selectedItem == item.id ? "text-purple" : "text-grey"
                }`}
              >
                {item.item}
              </p>
              {selectedItem == item.id ? (
                <p className="font-normal text-purple">(selected)</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
