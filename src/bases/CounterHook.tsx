import { useCounter } from "../hooks/useCounter";
import { CounterProps } from "./CounterProps";

export const CounterHook = (props: CounterProps) => {
  const { counter, handleClick, elementToAnimate } = useCounter(props);

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+{props.incrementalValue || 1}</button>
    </>
  );
};
