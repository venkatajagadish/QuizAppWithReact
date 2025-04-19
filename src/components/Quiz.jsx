import { useState, useCallback } from "react";
import QUESTIONS from "./../questions.js";
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [responses, setResponses] = useState([]);
  var questionNumber = responses.length + 1;

  const saveResponse = useCallback(function saveResponseForQuestion(
    selectedAnswer
  ) {
    setResponses((prevResponses) => {
      return [...prevResponses, selectedAnswer];
    });
  },
  []);
  const onNoResponse = useCallback(function onTimeOut() {
    setResponses((prevResponses) => {
      return [...prevResponses, "No Answer"];
    });
  }, []);
  const isQuizComplete = responses.length == QUESTIONS.length;
  if (isQuizComplete) {
    return <Summary responses={responses} />;
  }
  var clonedQues = [...QUESTIONS].map((ques) => {
    return { ...ques, answers: [...ques.answers] };
  });
  var currentQuestion = clonedQues[responses.length];
  currentQuestion.answers.sort(() => Math.random() - 0.5);
  currentQuestion.correctAnswer = currentQuestion.answers.findIndex(
    (answer) => {
      return (
        answer ==
        QUESTIONS[responses.length].answers[
          QUESTIONS[responses.length].correctAnswer
        ]
      );
    }
  );

  return (
    <>
      <div id="quiz">
        <Questions
          key={questionNumber}
          questionNumber={questionNumber}
          {...currentQuestion}
          saveResponse={saveResponse}
          onTimeOut={onNoResponse}
        />
      </div>
    </>
  );
}
