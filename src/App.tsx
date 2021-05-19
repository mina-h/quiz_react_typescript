import React, { MouseEvent, useState } from 'react';
import './App.css';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestoinCard';
import { Difficulty }  from './API'; 

const TOTAL_QUESTION = 10;

const App:React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true );

  console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY));

  const startTrivia = async() => {
    fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY)
      .then(data => setQuestions(data.result))
  }
  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  
  

  return (
    <div className="App">
      <h1>React quiz with Typescript</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading... </p>
      {/* <QuestionCard 
        questionNr={number + 1}
        totalQuestions={10}
        question={questions[number].question}
        answers={questions[number].correct_answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
