import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { Lock, Mail } from "iconoir-react";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <form className="flex flex-col gap-6">
      {/* Email */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Email address</label>
        <Input type="text" icon={<Mail />} placeholder="e.g. usef@email.com" />
      </div>

      {/* Password */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Create password</label>
        <Input
          type="password"
          icon={<Lock />}
          placeholder="Enter your password"
        />
      </div>

      {/* Confirm password */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Confirm password</label>
        <Input
          type="password"
          icon={<Lock />}
          placeholder="Enter your password"
        />
      </div>
      <Button variant="primary">Create new account</Button>
      <div className="flex flex-col md:flex-row justify-center items-center gap-1">
        <p className="text-grey-50 text-base">Already have an account?</p>
        <Link to="/login" className="text-purple text-base">
          Login
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;
