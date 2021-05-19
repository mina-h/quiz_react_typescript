import React, { MouseEvent, useState } from 'react';
import './App.css';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestoinCard';
import { QuestionState, Difficulty }  from './API'; 

const TOTAL_QUESTION = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App:React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true );

  // console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY));

  const startTrivia = async() => {
    setLoading(true);
    setGameover(true);
    const data = await fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY);
    console.log(data);
    setQuestions(data);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (questions[number].correct_answer === userAnswers[number].answer) {
      setScore(score + 1);
    } else {
      setScore(score);
    }
  }

  const nextQuestion = () => {
    setNumber(number+1)  
  }
  
  

  return (
    <div className="App">
      <h1>React quiz with Typescript</h1>
      {gameover || userAnswers.length === TOTAL_QUESTION ? 
        <button className="start" onClick={startTrivia}>Start</button>
        : null
      }
      {!gameover && <p className="score">Score:</p>}
      {loading && <p>Loading... </p>}
      {!loading && !gameover && <QuestionCard 
        questionNr={number + 1}
        totalQuestions={10}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />}
      {!gameover && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTION -1 ? 
      <button className="next" onClick={nextQuestion}>Next question</button> : null
      }
      </div>
  );
}

export default App;
