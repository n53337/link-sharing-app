import { DropDownItems } from "@/ui/DropDown";
import { Dispatch, Key, SetStateAction, createContext, useState } from "react";

type BuildersType = {
  id: number;
  linkId: Key | null | undefined;
  input: string;
};
interface PageData {
  avatar: string | null;
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  email: string | null;
  links: Array<DropDownItems | undefined>;
  builders: Array<BuildersType>;
}

interface EditorContextGen {
  pageData: PageData;
  setPageData: Dispatch<SetStateAction<PageData>>;
}

const defaultPageData: PageData = {
  avatar: null,
  firstName: null,
  lastName: null,
  username: null,
  email: null,
  links: [],
  builders: [],
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
