import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { Lock, Mail } from "iconoir-react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
      {/* Email */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Email address</label>
        <Input type="text" icon={<Mail />} placeholder="e.g. usef@email.com" />
      </div>

      {/* Password */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Email address</label>
        <Input
          type="password"
          icon={<Lock />}
          placeholder="Enter your password"
        />
      </div>
      <Button variant="primary">Login</Button>
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-grey-50 text-base">Don’t have an account?</p>
        <Link to="/register" className="text-purple text-base">
          Create account
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
