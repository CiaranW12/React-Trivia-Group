import questions from "../../questions";
import QuestionItem from "../QuestionItem/QuestionItem";
import { useState } from "react";

export default function QuestionList() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const selectedAnswerHandler = (selectedAnswer, index) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = selectedAnswer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <>
      <div>
        <h1>Test</h1>
        {questions.map((question, index) => {
          return (
            <QuestionItem
              key={index}
              options={question.answers}
              question={question}
              index={index}
              selectAnswer={selectedAnswerHandler}
            />
          );
        })}
      </div>
    </>
  );
}
