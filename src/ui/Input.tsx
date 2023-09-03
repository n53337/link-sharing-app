import clsx from "clsx";
import { CheckCircle, WarningTriangle } from "iconoir-react";
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
    "font-normal text-sm flex items-center gap-1": true,
    "text-green-700": errorType == "success",
    "text-yellow-600": errorType == "warning",
    "text-error": !errorType,
  });

  return (
    <div className="w-full relative">
      {icon ? <span className="absolute top-4 left-4">{icon}</span> : null}
      <input {...rest} className={inputStyles} />
      {errorMessage && error ? (
        <span className={inputErrorStyles}>
          {errorType == "success" ? (
            <CheckCircle strokeWidth={1.5} />
          ) : (
            <WarningTriangle strokeWidth={1.5} />
          )}
          <span>{errorMessage}</span>
        </span>
      ) : null}
    </div>
  );
};

export default Input;
