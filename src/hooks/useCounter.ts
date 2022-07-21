import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";

interface useCounterProps {
  initialValue?: number;
  maximumCount?: number;
  incrementalValue?: number;
}

export const useCounter = (props: useCounterProps) => {
  const { initialValue = 0, maximumCount, incrementalValue = 1 } = props;

  const [counter, setCounter] = useState<number>(initialValue);

  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const timeline = useRef<GSAPTimeline>(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => {
      const newValue = prev + incrementalValue;
      return Math.min(newValue, maximumCount || newValue);
    });
  };

  useLayoutEffect(() => {
    if (maximumCount && elementToAnimate.current) {
      timeline.current
        .to(elementToAnimate.current, {
          y: -10,
          duration: 0.2,
          ease: "ease.out",
        })
        .to(elementToAnimate.current, {
          y: 0,
          duration: 1,
          ease: "bounce.out",
        })
        .pause();
    }
  }, [timeline, maximumCount]);

  useEffect(() => {
    if (maximumCount) {
      if (counter < maximumCount) return;
      timeline.current.play(0);
    }
  }, [counter, maximumCount, timeline]);

  return { counter, handleClick, elementToAnimate };
};
