import { useState } from "react";
import { Calculator } from "./components/Calculator";

function App() {
  const [counter, setCounter] = useState(0);

  const handleCalculate = (operator: "+" | "-", amount: number) => {
    if (operator === "+") {
      setCounter((prev) => prev + amount);
    } else if (operator === "-") {
      setCounter((prev) => prev - amount);
    }
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center font-family-mono-retro">
      <Calculator
        counter={counter}
        onCalculate={handleCalculate}
        onReset={handleReset}
      />
    </main>
  );
}

export default App;
