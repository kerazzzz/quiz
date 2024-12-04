
// frontend/src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/questions?category=${category}&difficulty=${difficulty}`);
      setQuestions(response.data);
      setShowScore(false);
      setCurrentQuestion(0);
      setScore(0);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-controls">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Digital Logic">Digital Logic</option>
          <option value="Computer Architecture">Computer Architecture</option>
          {/* Add other categories */}
        </select>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button onClick={fetchQuestions}>Start Quiz</button>
      </div>
      {questions.length > 0 ? (
        showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <QuestionCard 
            question={questions[currentQuestion]} 
            onAnswerClick={handleAnswerClick} 
          />
        )
      ) : (
        <div>No questions available. Please select a category and difficulty.</div>
      )}
    </div>
  );
}

export default Quiz;