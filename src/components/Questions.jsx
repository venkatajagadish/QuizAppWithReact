import QuestionTimer from "./QuestionTimer";
import { useState } from "react";
export default function Questions(props) {
  const [highLightCorrectAnswer, setHighLightCorrectAnswer] =
    useState(undefined);
  function handleSelectAnswer(answer) {
    console.log(props.correctAnswer);
    setHighLightCorrectAnswer(props.correctAnswer);
    setTimeout(() => {
      setHighLightCorrectAnswer(undefined);
      props.saveResponse(answer);
    }, 1500);
  }
  return (
    <>
      <p>Question {props.questionNumber}</p>
      <div id="question">
        <QuestionTimer key={props.questionNumber} onTimeOut={props.onTimeOut} />
        <h2>{props.text}</h2>
        <ul id="answers">
          {props.answers.map((answer, index) => {
            return (
              <li key={answer} className="answer">
                <button
                  className={
                    highLightCorrectAnswer && highLightCorrectAnswer == index
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
