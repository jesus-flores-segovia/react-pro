import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";

function App() {
  return (
    <>
      <h1>React Reinforcement</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy initialValue={25} />
      <CounterEffect />
    </>
  );
}

export default App;
