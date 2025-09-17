import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-2 rounded-full font-medium transition",
        variant === "primary" &&
          "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90",
        variant === "secondary" &&
          "border border-gray-300 hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}
