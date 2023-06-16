import { useState, useEffect } from "react";

const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const notifier = setInterval(() => {
      if (forward) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    return () => clearInterval(notifier);
  }, []);

  return counter;
};

export default useCounter;
