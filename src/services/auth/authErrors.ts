export enum AuthErrorsTypes {
  Email,
  Password,
  Other,
}

export enum AuthErrors {
  "auth/invalid-email" = "Invalid email address. Please check the email and try again.",
  "auth/user-not-found" = "User not found. Please check your email address or sign up for a new account.",
  "auth/wrong-password" = "Incorrect password. Please check your password and try again.",
  "auth/invalid-password" = "The password you entered is invalid. Passwords must be at least six characters long.",
  "auth/email-already-exists" = "Email already in use. Please use a different email address or sign in.",
  "auth/internal-error" = "An unknown error occurred. Please try again later.",
  "non-valid-email" = "Invalid email address.",
  "empty-password" = "Please enter your password to log in and access your account.",
  "password-not-matching" = "The password and confirm password fields do not match.",
}

export enum AuthErrorsList {
  "auth/invalid-email",
  "auth/user-not-found",
  "auth/wrong-password",
  "auth/invalid-password",
  "auth/email-already-exists",
  "auth/internal-error",
  "non-valid-email",
  "empty-password",
  "password-not-matching",
}

export const getAuthErrorType = (
  errorMessage: AuthErrorsList | string
): AuthErrorsTypes => {
  console.log(errorMessage);

  if (
    errorMessage === AuthErrorsList["auth/email-already-exists"] ||
    errorMessage === AuthErrorsList["auth/invalid-email"] ||
    errorMessage === AuthErrorsList["non-valid-email"]
  ) {
    return AuthErrorsTypes.Email;
  } else if (
    errorMessage === AuthErrorsList["auth/invalid-password"] ||
    errorMessage === AuthErrorsList["auth/wrong-password"] ||
    errorMessage === AuthErrorsList["empty-password"] ||
    errorMessage === AuthErrorsList["password-not-matching"]
  ) {
    return AuthErrorsTypes.Password;
  }
  return AuthErrorsTypes.Other;
};
