import { DropDownItems } from "@/ui/DropDown";
import { ArrowRight } from "iconoir-react";
import { ComponentProps } from "react";

interface LinksPreviewListProps extends ComponentProps<"button"> {
  item: DropDownItems;
  to: String;
}

const LinksPreviewList = ({ item }: LinksPreviewListProps) => {
  return (
    <button
      className={`w-full lg:max-w-xs rounded-lg flex items-center justify-between gap-2 px-6 py-4 border hover:opacity-80 transition duration-300 ease-in-out`}
      style={{
        backgroundColor: `${item.bgColor}`,
        borderColor: item.border ? `${item.border}` : "none",
      }}
    >
      <span className="flex items-center gap-3">
        {item.icon}
        <p className={`${item.arrowColor ?? "text-white"}`}>{item.item}</p>
      </span>
      <ArrowRight color={`${item.arrowColor ?? "#ffffff"}`} strokeWidth={2} />
    </button>
  );
};

export default LinksPreviewList;
