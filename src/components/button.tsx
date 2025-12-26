import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient: "primary" | "secondary";
}

export default function Button({
  varient,
  className,
  children,
  ...props
}: ButtonProps) {
  
  const defaultClass = "px-4 h-10 border border-white/60 text-sm font-medium rounded-full ";
  
  const varients = {
    primary: "bg-transparent",
    secondary: "bg-white/90 text-black",
  };

  const combinedClass = twMerge(defaultClass, varients[varient], className);

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
