import LinksMenuList from "@/components/shared/LinksMenuList";
import { DropDownItems } from "@/ui/DropDown";
import { Dispatch, Key, SetStateAction, createContext, useState } from "react";

interface PageData {
  avatar: string | null;
  name: string | null;
  email: string | null;
  links: Array<DropDownItems>;
}

interface EditorContextGen {
  pageData: PageData;
  setPageData: Dispatch<SetStateAction<PageData>>;
}

const defaultPageData: PageData = {
  avatar: null,
  name: null,
  email: null,
  // links: [LinksMenuList[0], LinksMenuList[1], LinksMenuList[7]],
  links: [],
};

export const EditorContext = createContext<EditorContextGen>(null);

function EditorContextProvider({ ...props }) {
  const [pageData, setPageData] = useState<PageData>(defaultPageData);

  return (
    <EditorContext.Provider value={{ pageData, setPageData }}>
      {props.children}
    </EditorContext.Provider>
  );
}

export default EditorContextProvider;
