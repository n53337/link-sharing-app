import Button from "@/ui/Button";
import LinksSection from "./LinksSection";
import ProfileSection from "./ProfileSection";
import Notification from "../shared/Notification";
import { Link } from "iconoir-react";

function CustomizeSection() {
  return (
    <section className="h-screen max-h-screen pt-24">
      <div className="flex flex-col justify-between h-full max-h-full bg-white rounded-lg">
        {/* Section Mockup */}

        <LinksSection />
        {/* <ProfileSection /> */}
        {/* Cta */}

        <div className="bg-white border-t border-t-grey-10 p-4 flex items-center">
          <span className="hidden md:block w-full"></span>
          <div className="w-full md:w-fit flex gap-2">
            <Button variant="secondary" size="base">
              Save
            </Button>
            <Button variant="primary" size="base">
              Publish
            </Button>
          </div>
        </div>
      </div>
      <Notification
        message="Your changes have been successfully saved!"
        onClose={() => console.log("close")}
        type="success"
        icon={<Link />}
      />
    </section>
  );
}

export default CustomizeSection;
