import { useState, useEffect } from "react";
export default function QuestionTimer({ onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(15000);

  useEffect(() => {
    var timeout = setTimeout(onTimeOut, 15000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={15000} value={remainingTime} />;
}
