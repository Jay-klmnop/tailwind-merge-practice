import CounterButton from "./CounterButton";

interface ButtonGroupProps {
  amounts: number[];
  onCalculate: (amount: number) => void;
  operatorSymbol: string;
  buttonClassName?: string;
}

export function ButtonGroup({
  amounts,
  onCalculate,
  operatorSymbol,
  buttonClassName,
}: ButtonGroupProps) {
  return (
    <div className="flex space-x-2">
      {amounts.map((amount) => (
        <CounterButton
          key={amount}
          onClick={() => onCalculate(amount)}
          className={buttonClassName}
        >
          {operatorSymbol}
          {amount}
        </CounterButton>
      ))}
    </div>
  );
}
