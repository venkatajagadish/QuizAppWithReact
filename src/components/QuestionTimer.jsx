import { useState, useEffect } from "react";
export default function QuestionTimer({ timeOut, onTimeOut, isSelected }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    var timeout = setTimeout(() => {
      if (!isSelected) {
        onTimeOut();
      }
    }, timeOut);

    return () => {
      clearTimeout(timeout);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeOut} value={remainingTime} />;
}
