import React from 'react';


interface Props {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number; 
}
const QuestionCard: React.FC<Props> = ({question, 
  answers, 
  callback, 
  userAnswer, 
  questionNr, 
  totalQuestions}) => {
  return (
    <div>
      <p className="number">
        Question:{questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}}></p>
      <div>{
        answers.map((e,index) => 
          <div key={index}>
            <button disabled={userAnswer} value={e} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: e}}></span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionCard;