import React, { useEffect, useState } from "react";

export default function CounterIntervals() {
  const [count, setCount] = useState(0);

  useEffect(() => {
     // Set up the interval to increment the count every second
    const intervalId = setInterval(() => {
      console.log("Interval function running...");

      // Increment the count
      setCount(prev => prev + 1);

    }, 1000);

    // If count reaches 10, clear the interval
    if (count >= 10
    ) { // Check for 10 increments
        clearInterval(intervalId);
      }

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, [count]); // Empty dependency array ensures this runs once on mount

  return( 
    <>
    <h3>Scenario</h3>
    <p>
        Create a count which increments every second. 
    </p>
    <h3>Code explanation</h3>
    <p>
        Create a count which increments every second. 
    </p>
    <p>Count is {count}</p>
    </>

  )
}