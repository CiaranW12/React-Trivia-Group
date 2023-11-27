import questions from "../../questions";
import QuestionItem from "../QuestionItem/QuestionItem";
import { useState } from "react";

export default function QuestionList({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const selectedAnswerHandler = (selectedAnswer) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = selectedAnswer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const correctAnswers = questions.map(q => q.correctAnswer);
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === selectedAnswers[i]) {
        score++;
      }
    }
    setScore(score);
  };

  return (
    <div>
      <h1>Test</h1>
      {score === null ? (
        <>
          <QuestionItem
            question={questions[currentQuestionIndex]}
            selectAnswer={selectedAnswerHandler}
          />
          <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
          <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <div>Your score: {score}</div>
      )}
    </div>
  );
}