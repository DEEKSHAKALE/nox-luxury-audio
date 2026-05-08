import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
  children: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        "transition-[transform,box-shadow,background-color,opacity] duration-500 ease-[cubic-bezier(.16,1,.3,1)] will-change-transform",
        "hover:-translate-y-0.5 active:translate-y-0",
        size === "sm" ? "h-9 px-4 text-sm" : "h-11 px-6 text-sm",
        variant === "primary" &&
          "cta-gradient text-background font-semibold shadow-card hover:shadow-glow hover:opacity-95",
        variant === "ghost" &&
          "glass text-foreground/90 hover:bg-foreground/[0.06] hover:shadow-glow hover:border-border/70",
        // light sweep
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 before:ease-[cubic-bezier(.16,1,.3,1)] hover:before:opacity-100",
        "before:bg-[radial-gradient(60%_70%_at_50%_0%,oklch(0.96_0.01_260/0.22),transparent_65%)]",
        className,
      )}
    />
  );
}

