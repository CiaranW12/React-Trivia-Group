import { useState } from 'react';
import QuestionList from './components/QuestionList/QuestionList';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <QuestionList currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} />
  );
}

export default App;
