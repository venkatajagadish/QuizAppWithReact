import quizImg from "./../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizImg} alt="Quiz Image" />
      <h1>React Quiz</h1>
    </header>
  );
}
