import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const buttonStyles = {
  base: "inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  primary:
    "bg-gradient-to-r from-secondary via-red-700 to-accent text-white shadow-glow hover:-translate-y-0.5 hover:brightness-110",
  secondary:
    "border border-secondary/15 bg-white/75 text-primary shadow-sm backdrop-blur-xl hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white",
  ghost: "text-primary hover:-translate-y-0.5 hover:bg-white/70 hover:text-secondary",
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        buttonStyles.base,
        buttonStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        buttonStyles.base,
        buttonStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
