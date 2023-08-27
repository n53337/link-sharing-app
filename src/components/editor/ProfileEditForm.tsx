import Input from "@/ui/Input";

function ProfileEditForm() {
  return (
    <div className="bg-grey-light rounded-lg p-8 flex flex-col lg:flex-row lg:items-center gap-4">
      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 w-full">
          <label className="text-grey-50 text-sm lg:w-1/3">First name *</label>
          <Input type="text" placeholder="e.g. John" />
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center w-full">
          <label className="text-grey-50 text-sm lg:w-1/3">Last name *</label>
          <Input type="text" placeholder="e.g. Doe" />
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center w-full">
          <label className="text-grey-50 text-sm lg:w-1/3">Username *</label>
          <Input type="text" placeholder="e.g. john_doe" />
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center w-full">
          <label className="text-grey-50 text-sm lg:w-1/3">
            Email address *
          </label>
          <Input type="text" placeholder="e.g. johndoe@email.com" />
        </div>
      </form>
    </div>
  );
}

export default ProfileEditForm;
