import Result from "./components/Result";
import Game  from "./components/Game";
import "./index.scss";
import React, { useState } from "react";

export const questions = [
  {
    title: "Первая фраза программиста.",
    variants: ["Hello world!", "Введите текст", "I am a programmer"],
    correct: 0,
  },
  {
    title: "Что такое программирование?",
    variants: [
      "Это создание виртуальных миров.",
      "Это процесс создания компьютерной программы, включающий в себя проектирование программы, использование алгоритмов, написание кода программы и так далее.",
      "Это создание многоуровневой архитектуры железа.",
    ],
    correct: 1,
  },
  {
    title: "Что такое блок-схема?",
    variants: [
      "Это графическое представление программы",
      "Рисунок",
      "Схема с квадратными элементами",
    ],
    correct: 0,
  },
  {
    title: "Один из самых популярных языков программирования?",
    variants: [
      "Русский",
      "English",
      "JavaScript",
    ],
    correct: 2,
  },
  {
    title: "Язык ассемблер — это язык программирования ...",
    variants: [
      "низкого уровня",
      "высокого уровня",
    ],
    correct: 0,
  },
  {
    title: "Какого языка программирования не существует?",
    variants: [
      "F#",
      "C#",
      "D#",
      "Java",
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
