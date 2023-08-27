import { DeleteCircle } from "iconoir-react";
import { ReactElement, useState } from "react";

interface NotificationProps {
  message: String;
  onClose: () => void;
  type: "success" | "error";
  icon?: ReactElement;
}
function Notification({ message, onClose, type, icon }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  const closeNotification = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className="fixed bottom-24 mx-auto left-0 right-0 flex justify-center">
      <div
        className={`${
          type == "success" ? "bg-green-700" : "bg-error"
        } p-4 text-white text-center  flex items-center gap-6 rounded-lg drop-shadow-xl animate-slide-up ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <p className="text-sm md:text-base">{message}</p>
        </div>
        <DeleteCircle
          onClick={closeNotification}
          className="cursor-pointer"
          width={20}
          height={20}
          strokeWidth={2}
          color="#ffffff"
        />
      </div>
    </div>
  );
}

export default Notification;
