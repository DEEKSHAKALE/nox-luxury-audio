import type { HTMLAttributes } from "react";
import { cn } from "./cn";

type Props = HTMLAttributes<HTMLElement> & {
  variant?: "default" | "muted";
};

export function Section({ className, variant = "default", ...props }: Props) {
  return (
    <section
      {...props}
      className={cn(
        "py-24 md:py-40",
        variant === "muted" && "bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0%_0_0/0.7)_100%)]",
        className,
      )}
    />
  );
}

