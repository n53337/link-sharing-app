import { isEmailValid } from "@/helpers";
import { AuthErrors, AuthErrorsTypes } from "@/services/auth/authErrors";
import { login } from "@/services/auth/login";
import { AppSpinner } from "@/ui/AppSpinner";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { Lock, Mail } from "iconoir-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface LoginErrorState {
  error: AuthErrors | null;
  type: AuthErrorsTypes | null;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState<LoginErrorState>({
    error: null,
    type: null,
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (isEmailValid(email)) {
      if (password) {
        // Perform Login Action
        login({
          email,
          password,
          setLoading,
          setError: setLoginError,
          setPassword: setPassword,
        });
      } else {
        setLoginError({
          error: AuthErrors["empty-password"],
          type: AuthErrorsTypes.Password,
        });
      }
    } else {
      setLoginError({
        error: AuthErrors["non-valid-email"],
        type: AuthErrorsTypes.Email,
      });
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleLogin}>
      <AppSpinner loading={loading} />

      {/* Email */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Email address</label>
        <Input
          error={
            loginError.type == AuthErrorsTypes.Email ||
            loginError.type == AuthErrorsTypes.Other
          }
          errorMessage={loginError.error?.toString()}
          type="text"
          icon={<Mail />}
          placeholder="e.g. usef@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      {/* Password */}

      <div className="flex flex-col gap-2">
        <label className="text-sm">Password</label>
        <Input
          error={loginError.type == AuthErrorsTypes.Password}
          errorMessage={loginError.error?.toString()}
          type="password"
          icon={<Lock />}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <Button variant="primary" size="base">
        Login
      </Button>
      <div className="flex flex-col md:flex-row justify-center items-center gap-1">
        <p className="text-grey-50 text-base">Don’t have an account?</p>
        <Link to="/register" className="text-purple text-base">
          Create account
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
