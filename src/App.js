import React from 'react';
import './App.css';
import QuizComponent from './components/day1/quiz/QuizComponent';

function App() {

  const arr1 = [
    { title: "문제 1", answer: "1" },
    { title: "문제 2", answer: "2" },
    { title: "문제 3", answer: "3" },
    { title: "문제 4", answer: "4" },
    { title: "문제 5", answer: "5" }
  ]

  const arr2 = [
    { title: "title 1", answer: "1" },
    { title: "title 2", answer: "2" },
    { title: "title 3", answer: "3" },
    { title: "title 4", answer: "4" },
    { title: "title 5", answer: "5" }
  ]

  return (
    <div className="App">
      <header className="App-header">
      <QuizComponent quizArr={arr1}></QuizComponent>
      <QuizComponent quizArr={arr2}></QuizComponent>
      </header>
    </div>
  );
}

export default App;
