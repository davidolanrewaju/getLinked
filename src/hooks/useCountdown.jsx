import { useState, useEffect } from "react";

function useCountdown(initialTime) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        // You can trigger an action when the countdown reaches zero
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return timeLeft;
}

export default useCountdown;
