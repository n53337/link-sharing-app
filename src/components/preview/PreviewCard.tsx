import LinksMenuList from "../shared/LinksMenuList";
import LinksPreviewList from "../shared/LinksPreviewList";

function PreviewCard() {
  return (
    <div className="bg-white p-8 rounded-3xl md:shadow-drop-down w-full md:w-2/4 self-center">
      {/* Profile */}

      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="w-40 h-40 rounded-full border-4 border-purple overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://wallpapercave.com/wp/wp4540682.jpg"
            alt="profile picture"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="font-bold text-3xl text-grey">Ben Wright</p>
          <p className="text-grey-50">ben@example.com</p>
        </div>
      </div>

      {/* Links */}

      <div className="max-h-96 overflow-auto flex flex-col items-center gap-3 pt-8">
        {LinksMenuList.map((e) => (
          <LinksPreviewList item={e} to="https://github.com/n53337" />
        ))}
      </div>
    </div>
  );
}

export default PreviewCard;
