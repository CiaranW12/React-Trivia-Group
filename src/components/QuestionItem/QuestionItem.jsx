const QuestionItem = ({ question, selectAnswer }) => {
  return (
    <div className="question-item">
      <h3>{question.question}</h3>
      <ul>
        {question.answers.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`answer`}
                value={option}
                onClick={() => selectAnswer(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionItem;