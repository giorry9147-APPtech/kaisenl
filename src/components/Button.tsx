import Link from "next/link";
import React from "react";

type ButtonVariant = "primary" | "outline" | "sm" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow text-black hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,229,0,.18)]",
  outline:
    "border border-white/10 text-white hover:border-yellow hover:text-yellow hover:-translate-y-0.5",
  sm: "bg-yellow text-black text-xs px-4 py-2 hover:bg-white",
  ghost: "bg-dark-3 text-gray-1 border border-white/10 hover:border-yellow hover:text-yellow",
};

export function Button({
  variant = 'primary',
  icon,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3 font-heading text-sm font-semibold uppercase tracking-[.09em] transition-all duration-300";
  const variantStyles = buttonStyles[variant];
  const finalClassName = `${baseStyles} ${variantStyles} ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
