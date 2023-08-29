import Button from "@/ui/Button";
import ProfileSection from "./ProfileSection";
import LinksSection from "./LinksSection";

interface CustomizeSectionProps {
  activeTab: number;
}

function CustomizeSection({ activeTab }: CustomizeSectionProps) {
  return (
    <section className="h-screen max-h-screen pt-24">
      <div className="flex flex-col justify-between h-full max-h-full bg-white rounded-lg">
        {/* Section Mockup */}

        {activeTab == 1 ? (
          <LinksSection />
        ) : activeTab == 2 ? (
          <ProfileSection />
        ) : null}

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
    </section>
  );
}

export default CustomizeSection;
