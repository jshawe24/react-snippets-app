import React, { useEffect, useState } from "react";

export default function CounterIntervals() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false); // State to control the interval

  useEffect(() => {
    let intervalId;

    if (isActive) {
      // Set up the interval to increment the count every second
      intervalId = setInterval(() => {
        console.log("Interval function running...");

        // Increment the count if it's less than 10
        setCount(prev => {
          if (prev < 10) {
            return prev + 1;
          } else {
            clearInterval(intervalId); // Clear the interval when reaching 20
            return prev; // Prevent further increment
          }
        });
      }, 1000);
    }

    // Cleanup function to clear the interval on unmount or when stopping
    return () => clearInterval(intervalId);
  }, [isActive]); // Re-run the effect when `isActive` changes

  const startCounter = () => {
    if (count < 10) setIsActive(true); // Start only if count is less than 10
  };

  const stopCounter = () => {
    setIsActive(false); // Stop the counter
  };

  const resetCounter = () => {
    setCount(0);        // Reset count to 0
    setIsActive(false); // Stop the counter when resetting
  };

  return (
    <>
      <h3>Counter with Start/Stop Functionality</h3>
      <p>Count: {count}</p>
      <button onClick={startCounter} disabled={isActive || count >= 10}>
        Start
      </button>
      <button onClick={stopCounter} disabled={!isActive}>
        Stop
      </button>
      <button onClick={resetCounter} disabled={count === 0}>
        Reset
      </button>
      {count >= 10 && <p>The limit of 10 has been reached!</p>}
    </>
  );
}
