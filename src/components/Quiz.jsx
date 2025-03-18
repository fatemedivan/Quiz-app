import React, { useState } from "react";
import "./Quiz.css";

export default function Quiez() {
  const [questions, setQuestions] = useState([
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ]);
  const [currentq, setCurrentq] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentq === 3) {
      setShowScore(true);
    } else {
      setCurrentq((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">You scored {score} out of 4</div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentq + 1}</span>/ {questions.length}
            </div>
            <div className="question-text">
              {questions[currentq].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentq].answerOptions.map((answer) => (
              <button
                key={answer.answerText}
                onClick={() => handleClick(answer.isCorrect)}
              >
                {answer.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
