import type { HTMLAttributes } from "react";
import { cn } from "./cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
};

export function Container({ className, size = "default", ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto w-full px-6",
        size === "wide" ? "max-w-7xl" : "max-w-6xl",
        className,
      )}
    />
  );
}

