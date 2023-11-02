import brandIcon from "@/assets/brand/logo_icon.svg";
import brandLogo from "@/assets/brand/full_logo.svg";
import Tabs, { TabsItems } from "@/ui/Tabs";
import Button from "@/ui/Button";
import { EyeEmpty } from "iconoir-react";
import { useContext, useEffect } from "react";
import { EditorContext } from "@/contexts/EditorContextProvider";
import { useLocation, useNavigate } from "react-router";

interface NavbarProps {
  tabsItems: Array<TabsItems>;
  selectedItem: Number;
  setSelectedItem: any;
}

function Navbar({ tabsItems, selectedItem, setSelectedItem }: NavbarProps) {
  const { pageData, setPageData } = useContext(EditorContext);

  const { state } = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    console.log("state", state);

    if (state) {
      const data = JSON.parse(state);
      const { firstName, lastName, username, email, avatar } = data;

      setPageData({
        ...pageData,
        firstName,
        lastName,
        username,
        email,
        avatar,
      });
    }
  }, []);

  return (
    <header className="w-full fixed z-20 px-6 py-4 bg-white flex justify-between items-center shadow-drop-down">
      <img src={brandIcon} className="md:hidden" />
      <img src={brandLogo} className="hidden md:block" />
      <div>
        <Tabs
          tabsItems={tabsItems}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>

      <span
        className="md:hidden"
        onClick={() =>
          navigator("preview", {
            // state: JSON.stringify({
            //   firstName: pageData.firstName,
            //   lastName: pageData.lastName,
            //   username: pageData.username,
            //   email: pageData.email,
            //   avatar: pageData.avatar,
            // }),
            state: JSON.stringify(pageData),
          })
        }
      >
        <Button variant="secondary" size="sm">
          <EyeEmpty strokeWidth={2} />
        </Button>
      </span>

      <span
        className="hidden md:flex"
        onClick={() =>
          navigator("preview", { state: JSON.stringify(pageData) })
        }
      >
        <Button variant="secondary" size="sm">
          Preview
        </Button>
      </span>
    </header>
  );
}

export default Navbar;
