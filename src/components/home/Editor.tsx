import { BRAND_NAME } from "@/helpers/constants";
import { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import { TabsItems } from "@/ui/Tabs";
import { Link, ProfileCircle } from "iconoir-react";
import CustomizeSection from "../editor/CustomizeSection";

function Editor() {
  useEffect(() => {
    document.title = `Editor - ${BRAND_NAME}`;
  }, []);

  const [selectedItem, setSelectedItem] = useState(1);

  const tabItems: Array<TabsItems> = [
    {
      id: 1,
      icon: <Link strokeWidth={2} />,
      item: "Links",
    },
    {
      id: 2,
      icon: <ProfileCircle strokeWidth={2} />,
      item: "Profile Details",
    },
  ];

  return (
    <main className="bg-grey-light h-screen">
      <Navbar
        tabsItems={tabItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      <div>
        <CustomizeSection />
      </div>
    </main>
  );
}

export default Editor;
