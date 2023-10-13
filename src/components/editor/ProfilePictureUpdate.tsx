import { EditorContext } from "@/contexts/EditorContextProvider";
import { AddMediaImage, MediaImage } from "iconoir-react";
import { useContext, useState } from "react";

function ProfilePictureUpdate() {
  const { pageData, setPageData } = useContext(EditorContext);

  const [selectedImage, setSelectedImage] = useState(pageData.avatar);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageImport = (event: any) => {
    const file = event.target.files[0];
    setErrorMessage("");

    if (file) {
      if (file.width > 1024 || file.height > 1024) {
        setErrorMessage("Image dimensions must be below 1024x1024 pixels.");
      } else if (file.size > 1024 * 1024) {
        setErrorMessage("Image size must be below 1MB.");
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
          setPageData({ ...pageData, avatar: e.target?.result });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="bg-grey-light rounded-lg p-8 flex flex-col lg:flex-row lg:items-center gap-4">
      <p className="text-grey-50">Profile Picture</p>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div
          className={`relative ${
            selectedImage ? "" : ""
          } w-fit  bg-purple-10 rounded-lg cursor-pointer bg-cover bg-no-repeat bg-center`}
          style={{
            backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
          }}
        >
          <div
            className={`rounded-lg transition duration-300 ease-in-out ${
              selectedImage
                ? "bg-[rgba(0,0,0,.5)] hover:bg-[rgba(0,0,0,.75)]"
                : "hover:opacity-60"
            }`}
          >
            <input
              type="file"
              className="absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer z-10"
              onChange={handleImageImport}
              accept="image/*"
            />
            {!selectedImage ? (
              <span className="flex p-12 flex-col justify-center items-center gap-2">
                <AddMediaImage
                  width={32}
                  height={32}
                  strokeWidth={2}
                  color="#633CFF"
                />
                <p className="font-semibold text-purple text-center">
                  Upload Image
                </p>
              </span>
            ) : (
              <span className="flex p-12 flex-col justify-center items-center gap-2 transition duration-300 ease-in-out">
                <MediaImage
                  width={32}
                  height={32}
                  strokeWidth={2}
                  color="white"
                />
                <p className="font-semibold text-white text-center">
                  Change Image
                </p>
              </span>
            )}
          </div>
        </div>
        <span className="flex flex-col gap-2">
          <p className="text-grey-50 text-sm">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
          {errorMessage ? (
            <p className="text-error text-sm">{errorMessage}</p>
          ) : null}
        </span>
      </div>
    </div>
  );
}

export default ProfilePictureUpdate;
