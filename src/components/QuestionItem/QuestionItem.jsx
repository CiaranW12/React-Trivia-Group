const QuestionItem = ({ question, options, selectAnswer, index }) => {
  return (
    <div className="question-item">
      <h3>{question.question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onClick={() => selectAnswer(option, index)}
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
