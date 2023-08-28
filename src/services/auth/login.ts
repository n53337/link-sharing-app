import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import {
  AuthErrors,
  AuthErrorsList,
  AuthErrorsTypes,
  getAuthErrorType,
} from "./authErrors";
import { Dispatch, SetStateAction } from "react";
import { LoginErrorState } from "@/components/login/LoginForm";

interface LoginProps {
  email: string;
  password: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<LoginErrorState>>;
  setPassword: Dispatch<SetStateAction<string>>;
}

export const login = async ({
  email,
  password,
  setLoading,
  setError,
  setPassword,
}: LoginProps) => {
  setLoading(true);

  try {
    const loginData = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    setLoading(false);
    console.log(loginData.user);
  } catch (error: unknown) {
    // Empty password field
    setPassword("");
    setLoading(false);
    if (error.code in AuthErrors) {
      const errorType = getAuthErrorType(AuthErrorsList[error.code]);
      setError({ error: AuthErrors[error.code], type: errorType });
    } else {
      setError({
        error: AuthErrors["auth/internal-error"],
        type: AuthErrorsTypes.Other,
      });
    }
  }
};
