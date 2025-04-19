import QuestionTimer from "./QuestionTimer";
import { useState } from "react";
export default function Questions(props) {
  const [highLightCorrectAnswer, setHighLightCorrectAnswer] = useState(99);
  function handleSelectAnswer(answer) {
    console.log(props.correctAnswer, highLightCorrectAnswer);
    if (highLightCorrectAnswer != 99) {
      return;
    }
    setHighLightCorrectAnswer(props.correctAnswer);
    setTimeout(() => {
      props.saveResponse(answer);
      setHighLightCorrectAnswer(99);
    }, 2000);
  }
  return (
    <>
      <p>Question {props.questionNumber}</p>
      <div id="question">
        <QuestionTimer
          key={highLightCorrectAnswer}
          isSelected={highLightCorrectAnswer !== 99}
          timeOut={highLightCorrectAnswer == 99 ? 15000 : 2100}
          onTimeOut={props.onTimeOut}
        />
        <h2>{props.text}</h2>
        <ul id="answers">
          {props.answers.map((answer, index) => {
            return (
              <li key={answer} className="answer">
                <button
                  className={
                    highLightCorrectAnswer != 99 &&
                    highLightCorrectAnswer == index
                      ? "correct"
                      : undefined
                  }
                  onClick={() => handleSelectAnswer(answer)}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
