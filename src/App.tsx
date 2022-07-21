import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";

function App() {
  return (
    <>
      <h1>React Reinforcement</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy initialValue={25} />
      <CounterEffect />
      <CounterHook initialValue={5} maximumCount={20} incrementalValue={5} />
    </>
  );
}

export default App;
