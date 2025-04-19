export default function Questions(props) {
  return (
    <>
      <p>Question {props.questionNumber}</p>
      <div id="question">
        <h2>{props.text}</h2>
        <ul id="answers">
          {props.answers.map((answer, index) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => props.saveResponse(index)}>
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
