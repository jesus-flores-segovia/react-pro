import { useEffect, useState } from "react";
import { CounterProps } from "./CounterProps";

const MAXIMUM_COUNT = 10;

export const CounterEffect = (props: CounterProps) => {
  const { initialValue = 0 } = props;

  const [counter, setCounter] = useState<number>(initialValue);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log(
      "%cWe reached the maximum value!",
      "color: red; background-color: black;"
    );
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
