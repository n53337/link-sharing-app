import Button from "@/ui/Button";
import { Plus } from "iconoir-react";
import GetStartedLayout from "./GetStartedLayout";

function LinksSection() {
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

      <Button variant="secondary" size="base">
        <Plus strokeWidth={2} />
        <p>Add new link</p>
      </Button>

      {/* Get Started */}

      <div className="overflow-auto">
        <GetStartedLayout />
      </div>
    </div>
  );
}

export default LinksSection;
