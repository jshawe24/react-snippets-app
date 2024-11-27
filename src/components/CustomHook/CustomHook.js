import React, { useState } from 'react';

// Custom hook to manage counter state
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return { count, increment, decrement };
}

// First component that uses the custom hook
function CounterOne() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h3>Counter One</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Second component that uses the custom hook
function CounterTwo() {
  const { count, increment, decrement } = useCounter(10); // starts at 10

  return (
    <div>
      <h3>Counter Two</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Main component that renders both Counter components
const CustomHook = () => {
  return (
    <div>
      <h2>Custom Hook Example</h2>
      <p>
            This example has 2 components in one file, and a custom hook called 'useCounter' which both components can use
      </p>
      <CounterOne />
      <CounterTwo />
    </div>
  );
};

export default CustomHook;