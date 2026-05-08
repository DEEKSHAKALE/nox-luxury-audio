import type { HTMLAttributes } from "react";
import { m } from "framer-motion";
import { cn } from "../ui/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  className,
  delay = 0,
  y = 18,
  once = true,
  ...props
}: Props) {
  return (
    <m.div
      {...props}
      className={cn(className)}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.28 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}

