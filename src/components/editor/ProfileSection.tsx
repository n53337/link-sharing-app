import Button from "@/ui/Button";
import ProfileEditForm from "./ProfileEditForm";
import ProfilePictureUpdate from "./ProfilePictureUpdate";
import { LogOut } from "iconoir-react";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { AppSpinner } from "@/ui/AppSpinner";

function ProfileSection() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignOut = async () => {
    setLoading(true);
    getAuth().signOut();
  };

  return (
    <div className="h-5/6 flex flex-col gap-12 p-8">
      {/* Header */}

      <AppSpinner loading={loading} />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-grey text-2xl">Profile Details</h2>
          <Button variant="error" size="sm" onClick={handleSignOut}>
            <LogOut strokeWidth={2} />
            Logout
          </Button>
        </div>
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
