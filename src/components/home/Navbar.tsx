import brandIcon from "@/assets/brand/logo_icon.svg";
import brandLogo from "@/assets/brand/full_logo.svg";
import Tabs, { TabsItems } from "@/ui/Tabs";
import Button from "@/ui/Button";
import { EyeEmpty } from "iconoir-react";

interface NavbarProps {
  tabsItems: Array<TabsItems>;
  selectedItem: Number;
  setSelectedItem: any;
}

function Navbar({ tabsItems, selectedItem, setSelectedItem }: NavbarProps) {
  return (
    <header className="w-full px-6 py-4 bg-white flex justify-between items-center shadow-drop-down">
      <img src={brandIcon} className="md:hidden" />
      <img src={brandLogo} className="hidden md:block" />
      <div>
        <Tabs
          tabsItems={tabsItems}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>

      <span className="md:hidden">
        <Button variant="secondary" size="sm">
          <EyeEmpty strokeWidth={2} />
        </Button>
      </span>

      <span className="hidden md:flex">
        <Button variant="secondary" size="sm">
          Preview
        </Button>
      </span>
    </header>
  );
}

export default Navbar;
