import { cn } from "../utils/cn";
import { getThemeByCount } from "../styles/themes";
import { ButtonGroup } from "./ButtonGroup";
import Count from "./Count";
import ResetIcon from "../assets/reset.svg?react";

type CalculatorProps = {
  counter: number;
  onCalculate: (operator: "+" | "-", amount: number) => void;
  onReset: () => void;
};

export function Calculator({ counter, onCalculate, onReset }: CalculatorProps) {
  const currentTheme = getThemeByCount(counter);

  const amounts = [1, 10, 100];

  const handleIncrease = (amount: number) => {
    onCalculate("+", amount);
  };

  const handleDecrease = (amount: number) => {
    onCalculate("-", amount);
  };

  return (
    <div
      className={cn(
        "w-96 h-48 flex flex-col justify-center px-5 mx-2 border rounded-md relative",
        currentTheme.border,
        "transition-colors duration-300"
      )}
    >
      <section
        className={cn(
          "w-full h-12 flex justify-between items-center px-3 py-1 absolute top-0 left-0 rounded-t-md",
          currentTheme.background,
          currentTheme.headerText
        )}
      >
        <span className="flex justify-center items-center h-7 pl-0.5 pt-[1px] text-xl leading-none font-semibold">
          COUNTER APP
        </span>
        <button onClick={onReset} className="flex justify-center items-center">
          <ResetIcon className="w-6 h-6" />
        </button>
      </section>
      <section className="pt-10 space-y-4">
        <Count counter={counter} className={currentTheme.counterText} />
        <div className={cn("flex flex-col items-end space-y-2 font-extrabold")}>
          <ButtonGroup
            amounts={amounts}
            onCalculate={handleIncrease}
            operatorSymbol="+"
            buttonClassName={cn(currentTheme.counterText, currentTheme.border)}
          />
          <ButtonGroup
            amounts={amounts}
            onCalculate={handleDecrease}
            operatorSymbol="-"
            buttonClassName={cn(currentTheme.counterText, currentTheme.border)}
          />
        </div>
      </section>
    </div>
  );
}
