import React from 'react';

function QuestionCard({ question, onAnswerClick }) {
  return (
    <div className="question-card">
      <h2>{question.content}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswerClick(index)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;