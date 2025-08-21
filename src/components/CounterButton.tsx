import { cn } from "../utils/cn";
import type { ComponentProps } from "react";

type CounterButtonProps = ComponentProps<"button"> & {};

export default function CounterButton({
  className,
  children,
  ...props
}: CounterButtonProps) {
  return (
    <button
      className={cn("w-12 h-6 rounded-sm transition-colors", className)}
      {...props}
    >
      {children}
    </button>
  );
}
