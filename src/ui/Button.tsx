import clsx from "clsx";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant: "primary" | "secondary";
  active?: boolean;
  size?: "sm" | "base";
}

const Button = ({ variant, active, size, ...rest }: ButtonProps) => {
  // Button Base Styles
  const buttonStyles = clsx({
    "rounded-lg font-semibold transition duration-300 ease-in-out": true,
    "px-4 py-3": size == "sm",
    "px-16 py-3 w-full": size == "base",
    " bg-purple border border-transparent text-white hover:bg-purple-50 hover:shadow-btn":
      variant == "primary",
    "bg-purple opacity-25 cursor-not-allowed": rest.disabled,
    "border border-purple bg-transparent text-purple hover:bg-purple-10":
      variant == "secondary",
  });

  return (
    <button {...rest} className={buttonStyles}>
      {rest.children}
    </button>
  );
};

export default Button;
