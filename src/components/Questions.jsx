import QuestionTimer from "./QuestionTimer";
export default function Questions(props) {
  return (
    <>
      <p>Question {props.questionNumber}</p>
      <div id="question">
        <QuestionTimer key={props.questionNumber} onTimeOut={props.onTimeOut} />
        <h2>{props.text}</h2>
        <ul id="answers">
          {props.answers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => props.saveResponse(answer)}>
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
