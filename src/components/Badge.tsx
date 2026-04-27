import React from "react";

type BadgeVariant = "yellow" | "dark" | "red";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const badgeStyles: Record<BadgeVariant, string> = {
  yellow: "bg-yellow text-black",
  dark: "border border-white/10 bg-dark-4 text-gray-1",
  red: "bg-[#E1306C] text-white",
};

export function Badge({ variant = 'yellow', children }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[.1em]";
  const variantStyle = badgeStyles[variant];

  return <span className={`${baseStyles} ${variantStyle}`}>{children}</span>;
}

export default Badge;
