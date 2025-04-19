import { useState } from "react";
import QUESTIONS from "./../questions.js";
import Questions from "./Questions.jsx";

export default function Quiz() {
  const [responses, setResponses] = useState([]);
  var questionNumber = responses.length + 1;
  return (
    <>
      {QUESTIONS.map((question) => {
        return (
          question.id == `q${questionNumber}` && (
            <Questions
              key={question.id}
              questionNumber={questionNumber}
              {...question}
            />
          )
        );
      })}
    </>
  );
}
