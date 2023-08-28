import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseDb } from "../firebase";
import {
  AuthErrors,
  AuthErrorsList,
  AuthErrorsTypes,
  getAuthErrorType,
} from "./authErrors";
import { LoginProps } from "./login";
import { Dispatch, SetStateAction } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

interface RegisterProps extends LoginProps {
  setPasswordConfirm: Dispatch<SetStateAction<string>>;
}

export const register = async ({
  email,
  password,
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
    console.log(registerResponse);

    // TODO: Add created user to the database
    const userData = {
      avatar: null,
      email: registerResponse.user.email,
      first_name: null,
      last_name: null,
      username: null,
    };
    await setDoc(doc(firebaseDb, "Users", registerResponse.user.uid), userData);

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
