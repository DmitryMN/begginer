import React, {useState} from 'react';
import Game from './Game';
import Result from './Result';
import './index.scss';




const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];


function App() {

  const [index, setIndex] = useState(0);
  const question = questions[index];
  let [total, setTotal] = useState(0);

  const selectCorrect = (correct) => {
    if(correct === question.correct) {
      setTotal(total + 1);
    }
    setIndex(index + 1);
  }

  const resetIndex = () => {
    setIndex(0);
    setTotal(0);
  }

  const progress = Math.round((index / questions.length) * 100);

  return (
    <div className="App">
      {
        index !== questions.length ? <Game question={question} selectCorrect={selectCorrect} index={index} progress={progress}/> : <Result total={total} amount={questions.length} resetIndex={resetIndex}/>
      }
    </div>
  );
}

export default App;
