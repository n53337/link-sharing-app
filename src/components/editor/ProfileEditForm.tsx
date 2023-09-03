import { EditorContext } from "@/contexts/EditorContextProvider";
import { isUsernameValid } from "@/services/app";
import Input from "@/ui/Input";
import { useContext, useEffect, useState } from "react";

function ProfileEditForm() {
  const { pageData, setPageData } = useContext(EditorContext);

  const [firstName, setFirstName] = useState(pageData.firstName ?? "");
  const [lastName, setLastName] = useState(pageData.lastName ?? "");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(pageData.email ?? "");
  const [usernameValidation, setUsernameValidation] = useState({
    error: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    setPageData({
      ...pageData,
      email,
      firstName,
      lastName,
    });
  }, [firstName, lastName, email]);

  const handleUsernameValidation = async (e: any) => {
    isUsernameValid();
    setUsername(e.target.value);
    // TODO: Realime username validation
    if (e.target.value.length < 5) {
      setUsernameValidation({
        error: true,
        type: "warning",
        message: "cheking...",
      });
    } else if (e.target.value.length < 10) {
      setUsernameValidation({
        error: true,
        type: "success",
        message: "this username is valid",
      });
    } else {
      setUsernameValidation({
        error: true,
        type: "",
        message: "non valid username",
      });
    }
  };

  return (
    <div className="bg-grey-light rounded-lg p-8 flex flex-col lg:flex-row lg:items-center gap-4">
      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 w-full">
          <label className="text-grey-50 text-sm lg:w-1/3">First name *</label>
          <Input
            type="text"
            placeholder="e.g. John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center w-full">
          <label className="text-grey-50 text-sm lg:w-1/3">Last name *</label>
          <Input
            type="text"
            placeholder="e.g. Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center w-full">
          <label className="text-grey-50 text-sm lg:w-1/3">Username *</label>
          <Input
            type="text"
            placeholder="e.g. john_doe"
            value={username}
            onChange={handleUsernameValidation}
            error={usernameValidation.error}
            errorMessage={usernameValidation.message}
            errorType={usernameValidation.type}
          />
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center w-full">
          <label className="text-grey-50 text-sm lg:w-1/3">
            Email address *
          </label>
          <Input
            type="text"
            placeholder="e.g. johndoe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default ProfileEditForm;
