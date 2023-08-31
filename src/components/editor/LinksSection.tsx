import Button from "@/ui/Button";
import { Plus, WarningHexagon } from "iconoir-react";
import GetStartedLayout from "./GetStartedLayout";
import LinkBuilderArea from "./LinkBuilderArea";
import { useContext, useState } from "react";
import { EditorContext } from "@/contexts/EditorContextProvider";
import LinksMenuList from "../shared/LinksMenuList";
import Notification, { NotificationProps } from "../shared/Notification";

function LinksSection() {
  const { pageData, setPageData } = useContext(EditorContext);
  const [notif, setNotif] = useState<NotificationProps>({
    isVisible: false,
    type: "success",
    message: "",
    icon: <WarningHexagon />,
  });

  const addNewLink = () => {
    if (pageData.builders.length < LinksMenuList.length) {
      const newLinks = pageData.builders;
      newLinks.push(LinksMenuList[newLinks.length]);
      setPageData({ ...pageData, builders: newLinks });
    } else {
      setNotif({
        isVisible: true,
        type: "error",
        message: "Sorry, you've reached out the links limit",
        icon: <WarningHexagon />,
      });
    }
  };

  return (
    <div className="h-5/6 flex flex-col gap-12 p-8">
      {/* Header */}

      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-grey text-2xl">Customize your links</h2>
        <p className="text-grey-50">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      {/* Button */}

      <Button variant="secondary" size="base" onClick={addNewLink}>
        <Plus strokeWidth={2} />
        <p>Add new link</p>
      </Button>

      {/* Get Started */}

      <div className="overflow-auto flex flex-col gap-6">
        {pageData.builders.length ? <LinkBuilderArea /> : <GetStartedLayout />}
      </div>

      {/* Notifications */}
      {notif.isVisible ? (
        <Notification
          isVisible={notif.isVisible}
          type={notif.type}
          message={notif.message}
          icon={notif.icon}
          onClose={() => setNotif({ ...notif, isVisible: false })}
        />
      ) : null}
    </div>
  );
}

export default LinksSection;
