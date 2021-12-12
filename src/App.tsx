import React, {useState} from "react";
import { Difficulty, fetchQuizQuestions } from "./API/API";
import QuestionCard from "./components/QuestionCard";
import { TOTAL_QUESTIONS } from "./constants/constants";

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>REACT TS QUIZ</h1>
      <div>
        <button
          className="start"
          onClick={startTrivia}
        >
          Start
        </button>
        <p className="score">Score:</p>
        {/* <QuestionCard
          questionNumber={number + 1}
          totalQuestion={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        /> */}
        <button
          className="next"
          onClick={nextQuestion}
        >
          Next question
        </button>
      </div>
    </div>
  );
}

export default App;
