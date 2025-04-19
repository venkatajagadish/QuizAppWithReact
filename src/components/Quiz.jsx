import { useState } from "react";
import QUESTIONS from "./../questions.js";
import Questions from "./Questions.jsx";
import completedImg from "./../assets/quiz-complete.png";

export default function Quiz() {
  const [responses, setResponses] = useState([]);
  var questionNumber = responses.length + 1;

  function saveResponseForQuestion(selectedAnswer) {
    setResponses((prevResponses) => {
      return [...prevResponses, selectedAnswer];
    });
  }
  const isQuizComplete = responses.length == QUESTIONS.length;
  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={completedImg} />
        <h2>Quiz is completed!!</h2>
      </div>
    );
  }
  var clonedQues = [...QUESTIONS].map((ques) => {
    return { ...ques, answers: [...ques.answers] };
  });
  var currentQuestion = clonedQues[responses.length];
  currentQuestion.answers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div id="quiz">
        <Questions
          questionNumber={questionNumber}
          {...currentQuestion}
          saveResponse={saveResponseForQuestion}
        />
      </div>
    </>
  );
}
