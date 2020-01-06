import React from 'react';
import './App.css';
import QuizComponent from './components/day1/quiz/QuizComponent';
import LoopEx from './components/day3/LoopEx';
import ItemComponent from './components/day3/ItemComponent';

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

  const arr = [
    { pno: 1, pname: "Product...01", price: 3000, amount: 0 },
    { pno: 2, pname: "Product...02", price: 4000, amount: 0 },
    { pno: 3, pname: "Product...03", price: 5000, amount: 0 },
    { pno: 4, pname: "Product...04", price: 6000, amount: 0 },
    { pno: 5, pname: "Product...05", price: 7000, amount: 0 }
]

  return (
    <div className="App">
      <header className="App-header">
      <ItemComponent arr={arr}></ItemComponent>
      {/* <QuizComponent quizArr={arr1}></QuizComponent>
      <QuizComponent quizArr={arr2}></QuizComponent> */}
      </header>
    </div>
  );
}

export default App;
