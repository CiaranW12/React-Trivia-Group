const QuestionItem = ({ question, selectAnswer }) => {
  if (!question) return null;

  return (
    <div className="question-item">
      <h3 dangerouslySetInnerHTML={{ __html: question.question }}></h3>
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
              <span dangerouslySetInnerHTML={{ __html: option }}></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionItem;