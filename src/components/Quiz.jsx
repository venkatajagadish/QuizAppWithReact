import { useState } from "react";
import QUESTIONS from "./../questions.js";
import Questions from "./Questions.jsx";

export default function Quiz() {
  const [responses, setResponses] = useState([]);
  var questionNumber = responses.length + 1;
  var clonedQues = [...QUESTIONS].map((ques) => {
    return { ...ques, answers: [...ques.answers] };
  });
  var currentQuestion = clonedQues[responses.length];
  currentQuestion.answers.sort(() => Math.random() - 0.5);
  console.log("ques", QUESTIONS[responses.length].answers);
  console.log("shuff", currentQuestion.answers);

  return (
    <>
      <div id="quiz">
        <Questions questionNumber={questionNumber} {...currentQuestion} />
      </div>
    </>
  );
}
