import Button from "@/ui/Button";
import Input from "@/ui/Input";
import {
  ArrowEmailForward,
  Facebook,
  GitHub,
  Link,
  LinkedIn,
  RemoveLink,
} from "iconoir-react";
import DropDown, { DropDownItems } from "@/ui/DropDown";
import { useEffect, useState } from "react";
import Tabs, { TabsItems } from "@/ui/Tabs";
import LinksMenuList, {
  LinksMenuListGrey,
} from "@/components/shared/LinksMenuList";
import LinksPreviewList from "@/components/shared/LinksPreviewList";

function App() {
  const dropItems: Array<DropDownItems> = [
    {
      id: 1,
      icon: <GitHub />,
      item: "github",
    },
    {
      id: 2,
      icon: <LinkedIn />,
      item: "linkedin",
    },
    {
      id: 3,
      icon: <Facebook />,
      item: "facebook",
    },
  ];

  const tabsItems: Array<TabsItems> = [
    {
      id: 1,
      icon: <GitHub />,
      item: "github",
    },
    {
      id: 2,
      icon: <LinkedIn />,
      item: "linkedin",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(1);

  useEffect(() => {
    console.log("selected items: ", selectedItem);
  }, [selectedItem]);

  return (
    <div className="m-12">
      <p>Buttons</p>
      <br />
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <Button variant="primary" children="submit" />
        <Button variant="secondary" children="click" />
        <Button variant="primary" disabled children="hey" />
        <Button variant="secondary" disabled children="click me" />
      </div>
      <p className="my-8">Inputs</p>
      <div className="mt-8 flex gap-4 flex-wrap">
        <Input type="text" placeholder="Text Field Empty" disabled />
        <Input
          type="text"
          placeholder="Text Field Empty"
          icon={<ArrowEmailForward />}
        />
        <Input type="text" placeholder="Text Field Empty" icon={<Link />} />
        <Input
          type="text"
          placeholder="Text Field Empty"
          icon={<Link />}
          error
          errorMessage="Please check again"
        />
        <Input type="text" placeholder="Text Field Empty" error />
      </div>
      <p className="my-8">DropDown</p>
      <div className="mt-8 flex gap-4 flex-wrap">
        <DropDown
          // disabled={true}
          placeHolder="Dropdown Field Active"
          icon={<RemoveLink />}
          dropDownItems={LinksMenuListGrey}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <p className="my-8">Tabs</p>
      <div className="mt-8 flex gap-4 flex-wrap">
        <Tabs
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          tabsItems={tabsItems}
        />
      </div>
      <p className="my-8">Links</p>
      <div className="mt-8 flex flex-col gap-4">
        {LinksMenuList.map((e) => (
          // <p>{e.bgColor}</p>
          <LinksPreviewList item={e} to="/" />
        ))}
      </div>
    </div>
  );
}

export default App;
