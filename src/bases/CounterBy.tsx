import { useState } from "react";
import { CounterProps } from "./CounterProps";

export const CounterBy = (props: CounterProps) => {
  const { initialValue = 5, incrementalValue = 1 } = props;

  const [{ counter, clicks }, setCounter] = useState<CounterByState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (increment: number) => {
    setCounter(
      ({ counter, clicks }): CounterByState => ({
        counter: counter + increment,
        clicks: clicks + 1,
      })
    );
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button
        onClick={() => {
          handleClick(incrementalValue);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          handleClick(5);
        }}
      >
        +5
      </button>
    </>
  );
};

interface CounterByState {
  counter: number;
  clicks: number;
}
