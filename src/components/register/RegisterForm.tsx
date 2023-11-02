import { isEmailValid } from "@/helpers";
import { AuthErrors, AuthErrorsTypes } from "@/services/auth/authErrors";
import { AppSpinner } from "@/ui/AppSpinner";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { Lock, Mail } from "iconoir-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginErrorState } from "../login/LoginForm";
import { register } from "@/services/auth/register";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [reigsterError, setRegisterError] = useState<LoginErrorState>({
    error: null,
    type: null,
  });

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (isEmailValid(email)) {
      if (password && password == passwordConfirm) {
        // Perform Register Action
        register({
          email,
          password,
          setLoading,
          setError: setRegisterError,
          setPassword,
          setPasswordConfirm,
        });
      } else {
        setRegisterError({
          error: AuthErrors["password-not-matching"],
          type: AuthErrorsTypes.Password,
        });
      }
    } else {
      setRegisterError({
        error: AuthErrors["non-valid-email"],
        type: AuthErrorsTypes.Email,
      });
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleRegister}>
      {/* Email */}

      <AppSpinner loading={loading} />

      <div className="flex flex-col gap-2">
        <label className="text-sm">Email address</label>
        <Input
          error={
            reigsterError.type == AuthErrorsTypes.Email ||
            reigsterError.type == AuthErrorsTypes.Other
          }
          errorMessage={reigsterError.error?.toString()}
          type="text"
          icon={<Mail />}
          placeholder="e.g. usef@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Create password</label>
        <Input
          error={reigsterError.type == AuthErrorsTypes.Password}
          errorMessage={reigsterError.error?.toString()}
          type="password"
          icon={<Lock />}
          placeholder="At least 8 characters"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      {/* Confirm password */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Confirm password</label>
        <Input
          error={reigsterError.type == AuthErrorsTypes.Password}
          errorMessage={reigsterError.error?.toString()}
          type="password"
          icon={<Lock />}
          placeholder="At least 8 characters"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
      </div>
      <p className="text-grey-50 text-sm">
        Password must contain at least 8 characters
      </p>
      <Button variant="primary" size="base">
        Create new account
      </Button>
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
