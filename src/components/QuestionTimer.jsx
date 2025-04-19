import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeOut, isSelected }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    var timeout = setTimeout(() => {
      if (!isSelected) {
        onTimeOut;
      }
    }, timeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
