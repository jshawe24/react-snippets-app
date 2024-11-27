import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

      <p>This is a demonstration of two separate counter components both using the same useCounter custom hook </p>
      <div className="code-container">
      <SyntaxHighlighter language="javascript" style={solarizedlight}>
        {`
        // Custom hook to manage counter state
        function useCounter(initialValue = 0) {
          const [count, setCount] = useState(initialValue);

          const increment = () => setCount(prevCount => prevCount + 1);
          const decrement = () => setCount(prevCount => prevCount - 1);

          return { count, increment, decrement };
        }`}
        </SyntaxHighlighter>
      </div>
      
      
      <p>
      Isolated State Management: Using the custom hook allows you to define a specific state for each instance of the counter components. The hooks maintain their separate states because:
      <ul>
        <li>Hooks in React (like useState) are tied to the component instance in which they are called.</li>
        <li>React keeps track of these state instances based on the component's render order and lifecycle.</li>
      </ul>
      
      </p>
      <CounterOne />
      <CounterTwo />
    </div>
  );
};

export default CustomHook;