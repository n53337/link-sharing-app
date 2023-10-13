import { DropDownItems } from "@/ui/DropDown";
import { ArrowRight } from "iconoir-react";
import { ComponentProps } from "react";

interface LinksPreviewListProps extends ComponentProps<"a"> {
  item: DropDownItems;
  to: string | undefined;
}

const LinksPreviewList = ({ item, to }: LinksPreviewListProps) => {
  return (
    <a
      href={`https://${to ?? "#"}`}
      onClick={!to ? (e) => e.preventDefault() : () => {}}
      className={`w-full lg:max-w-xs rounded-lg flex items-center justify-between gap-2 px-6 py-4 border hover:opacity-80 transition duration-300 ease-in-out cursor-pointer ${
        !to ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={{
        backgroundColor: `${item.bgColor}`,
        borderColor: item.border ? `${item.border}` : "none",
      }}
      target={to ? "_blank" : "_parent"}
      rel="noopener noreferrer"
    >
      <span className="flex items-center gap-3">
        {item.icon}
        <p className={`${item.arrowColor ?? "text-white"}`}>{item.item}</p>
      </span>
      <ArrowRight color={`${item.arrowColor ?? "#ffffff"}`} strokeWidth={2} />
    </a>
  );
};

export default LinksPreviewList;
