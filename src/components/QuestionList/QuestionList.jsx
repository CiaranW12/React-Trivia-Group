import QuestionItem from "../QuestionItem/QuestionItem";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function QuestionList({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple');
      const fetchedQuestions = response.data.results.map(question => ({
        ...question,
        answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5)
      }));
      setQuestions(fetchedQuestions);
    };

    fetchQuestions();
  }, []);

  const selectedAnswerHandler = (answer) => {
    setSelectedAnswers((prev) => {
      const copy = [...prev];
      copy[currentQuestionIndex] = answer;
      return copy;
    });
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSubmit = () => {
    const correctAnswers = questions.map(q => q.correct_answer);
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