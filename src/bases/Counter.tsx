import { useState } from "react";
import { CounterProps } from "./CounterProps";

export const Counter = (props: CounterProps) => {
  const { initialValue = 0 } = props;

  const [counter, setCounter] = useState<number>(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
