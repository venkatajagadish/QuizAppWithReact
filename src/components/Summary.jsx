import completedImg from "./../assets/quiz-complete.png";
import QUESTIONS from "./../questions.js";
export default function Summary({ responses }) {
  const correctAnswered = responses.filter((response, index) => {
    return QUESTIONS[index].answers[QUESTIONS[index].correctAnswer] == response;
  }).length;
  const skipped = responses.filter(
    (response) => response == "No Answer"
  ).length;
  const wrongAnswerd = QUESTIONS.length - correctAnswered - skipped;
  return (
    <>
      <div id="summary">
        <img src={completedImg} />
        <h2>Quiz is completed!!</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{correctAnswered}</span>
            <span className="text">Questions are Correctly Answerd</span>
          </p>
          <p>
            <span className="number">{skipped}</span>
            <span className="text">Questions are Skipped</span>
          </p>
          <p>
            <span className="number">{wrongAnswerd}</span>
            <span className="text">Questions are Wrongly Answered</span>
          </p>
        </div>
        <div id="summary-stats">
          <span className="number">
            Your Score is{" "}
            {Math.round((correctAnswered / QUESTIONS.length) * 100)}%
          </span>
        </div>
      </div>
    </>
  );
}
