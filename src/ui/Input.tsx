import clsx from "clsx";
import { ComponentProps, ReactElement } from "react";

interface InputProps extends ComponentProps<"input"> {
  error?: boolean;
  errorMessage?: string;
  errorType?: "warning" | "success";
  icon?: ReactElement;
}

const Input = ({
  error,
  icon,
  errorMessage,
  errorType,
  ...rest
}: InputProps) => {
  // Input Base Styles
  const inputStyles = clsx({
    "py-3 w-full border rounded-lg text-grey outline-none transition duration-300 ease-in-out":
      true,
    "font-normal placeholder:opacity-50 placeholder:text-grey border-grey-10 focus:border-purple focus:shadow-btn":
      !error,
    "text-error border-error  focus:shadow-none placeholder:text-error":
      error && !errorType,
    "px-10": icon,
    "px-4": !icon,
    "opacity-50 cursor-not-allowed": rest.disabled,
  });

  const inputErrorStyles = clsx({
    "font-normal text-sm": true,
    "text-green-700": errorType == "success",
    "text-yellow-600": errorType == "warning",
    "text-error": !errorType,
  });

  return (
    <div className="w-full relative">
      {icon ? <span className="absolute top-4 left-4">{icon}</span> : null}
      <input {...rest} className={inputStyles} />
      {errorMessage && error ? (
        <span className={inputErrorStyles}>{errorMessage}</span>
      ) : null}
    </div>
  );
};

export default Input;
