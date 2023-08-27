import ProfileEditForm from "./ProfileEditForm";
import ProfilePictureUpdate from "./ProfilePictureUpdate";

function ProfileSection() {
  return (
    <div className="h-5/6 flex flex-col gap-12 p-8">
      {/* Header */}

      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-grey text-2xl">Profile Details</h2>
        <p className="text-grey-50">
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      {/* Profile Update */}

      <div className="overflow-auto flex flex-col gap-6">
        <ProfilePictureUpdate />
        <ProfileEditForm />
      </div>
    </div>
  );
}

export default ProfileSection;
