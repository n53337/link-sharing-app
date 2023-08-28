import clsx from "clsx";
import { ComponentProps, ReactElement } from "react";

interface InputProps extends ComponentProps<"input"> {
  error?: boolean;
  errorMessage?: string;
  icon?: ReactElement;
}

const Input = ({ error, icon, errorMessage, ...rest }: InputProps) => {
  // Input Base Styles
  const inputStyles = clsx({
    "py-3 w-full border rounded-lg text-grey outline-none transition duration-300 ease-in-out":
      true,
    "font-normal placeholder:opacity-50 placeholder:text-grey border-grey-10 focus:border-purple focus:shadow-btn":
      !error,
    "text-error border-error  focus:shadow-none placeholder:text-error": error,
    "px-10": icon,
    "px-4": !icon,
    "opacity-50 cursor-not-allowed": rest.disabled,
  });

  return (
    <div className="w-full relative">
      {icon ? <span className="absolute top-4 left-4">{icon}</span> : null}
      <input {...rest} className={inputStyles} />
      {errorMessage && error ? (
        <span className="font-normal text-sm text-error">{errorMessage}</span>
      ) : null}
    </div>
  );
};

export default Input;
