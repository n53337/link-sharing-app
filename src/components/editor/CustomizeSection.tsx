import Button from "@/ui/Button";
import { Plus } from "iconoir-react";
import GetStartedLayout from "./GetStartedLayout";

function CustomizeSection() {
  return (
    <section className="h-screen max-h-screen pt-24">
      <div className="flex flex-col justify-between h-full max-h-full bg-white rounded-lg">
        <div className="h-5/6 flex flex-col gap-12 p-8">
          {/* Header */}

          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-grey text-2xl">
              Customize your links
            </h2>
            <p className="text-grey-50">
              Add/edit/remove links below and then share all your profiles with
              the world!
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

        {/* Cta */}
        <div className="bg-white border-t border-t-grey-10 p-4 flex items-center">
          <span className="hidden md:block w-full"></span>
          <div className="w-full md:w-fit">
            <Button variant="primary" size="base">
              Save
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomizeSection;
