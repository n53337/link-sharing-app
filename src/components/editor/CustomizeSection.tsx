import Button from "@/ui/Button";
import { Plus } from "iconoir-react";
import getStartedImg from "@/assets/images/add_new.svg";

function CustomizeSection() {
  return (
    <section className="h-screen pt-20">
      <div className="relative p-4 w-full h-full">
        <div className="px-6 py-12 flex flex-col gap-10 bg-white h-full rounded-lg">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-grey text-2xl">
              Customize your links
            </h2>
            <p className="text-grey-50">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>

          <Button variant="secondary" size="base">
            <Plus strokeWidth={2} />
            <p>Add new link</p>
          </Button>

          <div className="px-4 py-10 mb-10 bg-grey-light rounded-lg flex flex-col justify-center items-center gap-8 md:h-full">
            <img src={getStartedImg} className="w-5/12" />
            <h2 className="font-bold text-grey text-2xl">
              Let’s get you started
            </h2>
            <p className="text-grey-50 text-center">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
        <div className="w-cta fixed bottom-0 bg-white border-t border-t-grey-10 p-4 flex items-center">
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
