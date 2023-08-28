import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import {
  AuthErrors,
  AuthErrorsList,
  AuthErrorsTypes,
  getAuthErrorType,
} from "./authErrors";
import { LoginProps } from "./login";
import { Dispatch, SetStateAction } from "react";

interface RegisterProps extends LoginProps {
  passwordConfirm: string;
  setPasswordConfirm: Dispatch<SetStateAction<string>>;
}

export const register = async ({
  email,
  password,
  passwordConfirm,
  setLoading,
  setError,
  setPassword,
  setPasswordConfirm,
}: RegisterProps) => {
  setLoading(true);

  try {
    const registerResponse = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    // TODO: Add created user to the database

    setLoading(false);
  } catch (error: any) {
    setPassword("");
    setPasswordConfirm("");
    // Handle Errors
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
