import Button from "@/ui/Button";
import LinksSection from "./LinksSection";
import ProfileSection from "./ProfileSection";

function CustomizeSection() {
  return (
    <section className="h-screen max-h-screen pt-24">
      <div className="flex flex-col justify-between h-full max-h-full bg-white rounded-lg">
        {/* Section Mockup */}

        {/* <LinksSection /> */}
        <ProfileSection />
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
