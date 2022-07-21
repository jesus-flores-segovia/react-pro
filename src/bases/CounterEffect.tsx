import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

import { CounterProps } from "./CounterProps";

const MAXIMUM_COUNT = 10;

export const CounterEffect = (props: CounterProps) => {
  const { initialValue = 0 } = props;

  const [counter, setCounter] = useState<number>(initialValue);

  const counterNode = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log(
      "%cWe reached the maximum value!",
      "color: red; background-color: black;"
    );

    const timeline = gsap.timeline();

    timeline
      .to(counterNode.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(counterNode.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterNode}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
