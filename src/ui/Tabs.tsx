import clsx from "clsx";
import { ComponentProps, Key, ReactElement } from "react";

export interface TabsItems {
  id: Key;
  icon: ReactElement;
  item: String;
}

interface TabsProps extends ComponentProps<"div"> {
  tabsItems: Array<TabsItems>;
  selectedItem: Number;
  setSelectedItem: any;
}

function Tabs({
  selectedItem,
  setSelectedItem,
  tabsItems,
  ...rest
}: TabsProps) {
  const tabStyle = clsx({
    "font-semibold px-6 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition duration-300 ease-in-out":
      true,
  });

  return (
    <div {...rest} className="w-full flex items-center gap-4">
      {tabsItems.map((item) => (
        <div
          className={`${tabStyle} ${
            selectedItem == item.id
              ? "bg-purple-10 text-purple"
              : "bg-none text-grey hover:text-purple"
          }`}
          onClick={() => setSelectedItem(item.id)}
        >
          {item.icon}
          <p className="hidden md:block">{item.item}</p>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
