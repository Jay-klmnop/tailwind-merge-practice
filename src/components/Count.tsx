import { cn } from "../utils/cn";

interface CountProps {
  counter: number;
  className?: string;
}

export default function Count({ counter, className }: CountProps) {
  return (
    <div className={cn("text-3xl", className)}>
      counter:
      <span className="font-bold">{counter}</span>
    </div>
  );
}
