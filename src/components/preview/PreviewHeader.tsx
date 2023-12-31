import Button from "@/ui/Button";
import { ArrowEmailForward, ShareAndroid } from "iconoir-react";

interface PreviewHeaderProps {
  onBack: () => void;
}

function PreviewHeader({ onBack }: PreviewHeaderProps) {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center bg-white rounded-lg p-4">
        {/* Desktop Navbar */}

        <span className="hidden md:block">
          <Button variant="secondary" size="base" onClick={onBack}>
            Back to Editor
          </Button>
        </span>
        <span className="hidden md:block">
          <Button variant="primary" size="base">
            Share Link
          </Button>
        </span>

        {/* Mobile Navbar */}

        <span className="md:hidden">
          <Button variant="secondary" size="base" onClick={onBack}>
            <ArrowEmailForward
              width={22}
              height={22}
              strokeWidth={2}
              className="transform -scale-x-100"
            />
          </Button>
        </span>
        <span className="md:hidden">
          <Button variant="primary" size="base">
            <ShareAndroid width={22} height={22} strokeWidth={2} />
          </Button>
        </span>
      </div>
    </header>
  );
}

export default PreviewHeader;
