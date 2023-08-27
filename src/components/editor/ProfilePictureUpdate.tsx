import { AddMediaImage } from "iconoir-react";

function ProfilePictureUpdate() {
  return (
    <div className="bg-grey-light rounded-lg p-8 flex flex-col lg:flex-row lg:items-center gap-4">
      <p className="text-grey-50">Profile Picture</p>
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="relative p-12 w-fit bg-purple-10 rounded-lg cursor-pointer">
          <input
            type="file"
            className="absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
          />
          <span className="flex flex-col justify-center items-center gap-2">
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
        </div>
        <p className="text-grey-50 text-sm">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}

export default ProfilePictureUpdate;
