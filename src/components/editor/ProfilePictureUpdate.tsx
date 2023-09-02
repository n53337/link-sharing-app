import { AddMediaImage, MediaImage } from "iconoir-react";
import { useState } from "react";

function ProfilePictureUpdate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageImport = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-grey-light rounded-lg p-8 flex flex-col lg:flex-row lg:items-center gap-4">
      <p className="text-grey-50">Profile Picture</p>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div
          className={`relative ${
            selectedImage ? "" : ""
          } w-fit  bg-purple-10 rounded-lg cursor-pointer bg-cover`}
          style={{
            backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
          }}
        >
          <div
            className={`p-0 rounded-lg transition duration-300 ease-in-out ${
              selectedImage ? "hover:bg-[rgba(0,0,0,.6)]" : "hover:opacity-60"
            }`}
          >
            <input
              type="file"
              className="absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
              onChange={handleImageImport}
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
              <span className="flex p-12 flex-col justify-center items-center gap-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
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
        <p className="text-grey-50 text-sm">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}

export default ProfilePictureUpdate;
