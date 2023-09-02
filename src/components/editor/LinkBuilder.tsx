import DropDown, { DropDownItems } from "@/ui/DropDown";
import { Link, MenuScale } from "iconoir-react";
import { useContext, useEffect, useState } from "react";
import LinksMenuList, { LinksMenuListGrey } from "../shared/LinksMenuList";
import Input from "@/ui/Input";
import { SortableProps } from "./SortableLinkBuilder";
import { EditorContext } from "@/contexts/EditorContextProvider";
import { BRAND_NAME } from "@/helpers/constants";
import { LinkInputErrors } from "@/helpers/linkInputErrors";

interface LinkBuilderProps extends SortableProps {}

function LinkBuilder({ id, index }: LinkBuilderProps) {
  const { pageData, setPageData } = useContext(EditorContext);

  const [selectedItem, setSelectedItem] = useState<DropDownItems | null>(null);

  const [linkInput, setLinkInput] = useState<string>("");
  const [linkInputError, setLinkInputError] = useState<string>("");

  // Handle Builder selected item change
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

    // reset link input
    setLinkInput("");
  }, [selectedItem]);

  // Remove builder
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

  // manage link input
  const handleLinkInput = (e: any) => {
    setLinkInput(e.target.value);

    const urlPlaceHolder = LinksMenuList.find(
      (e) => e.id == selectedItem?.id
    )?.inputPlaceHolder;

    const isUrlValid = (): boolean => {
      const pattern = new RegExp(
        `^${urlPlaceHolder
          ?.replace("/username", "")
          .replace(/\//g, "\\/")}\/[^*]`
      );
      const cleanLinkPattern = new RegExp(
        `^${urlPlaceHolder
          ?.replace("/username", "")
          .replace("https://www.", "")
          .replace(/\//g, "\\/")}\/[^*]`
      );
      const noWwwPattern = new RegExp(
        `^${urlPlaceHolder
          ?.replace("/username", "")
          .replace("www.", "")
          .replace(/\//g, "\\/")}\/[^*]`
      );

      const isValidLink =
        pattern.test(e.target.value) ||
        cleanLinkPattern.test(e.target.value) ||
        noWwwPattern.test(e.target.value);

      return isValidLink;
    };

    const newLinks = pageData.links;
    const builderId = pageData.builders.find((e) => e.id == id)?.linkId;
    const linkIndex = newLinks.findIndex((e) => e?.id == builderId);

    if (!e.target.value) {
      setLinkInputError(LinkInputErrors.EMPTY_URL);

      newLinks[linkIndex] = {
        ...newLinks[linkIndex],
        linkHref: "",
      };

      setPageData({ ...pageData, links: newLinks });
    } else if (!isUrlValid()) {
      setLinkInputError(LinkInputErrors.WRONG_URL_PATTERN);

      newLinks[linkIndex] = {
        ...newLinks[linkIndex],
        linkHref: "",
      };

      setPageData({ ...pageData, links: newLinks });
    } else {
      setLinkInputError("");

      // Active and Desactivate links
      newLinks[linkIndex] = {
        ...newLinks[linkIndex],
        linkHref: e.target.value.replace("https://", ""),
      };

      setPageData({ ...pageData, links: newLinks });
    }
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
            error={Boolean(linkInputError)}
            errorMessage={linkInputError}
            value={linkInput}
            onChange={handleLinkInput}
            disabled={!selectedItem}
            type="text"
            icon={<Link />}
            placeholder={
              selectedItem
                ? "e.g. " +
                  LinksMenuList.find((e) => e.id == selectedItem.id)
                    ?.inputPlaceHolder
                : `e.g. ${BRAND_NAME}.com/username`
            }
          />
        </div>
      </div>
    </div>
  );
}

export default LinkBuilder;
