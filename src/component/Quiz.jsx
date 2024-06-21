import data from "../assets/data";
import "./Quiz.css";
import { useState, useRef } from "react";
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (e, ans) => {
    if (!lock) {
      if (question.correctAnswer === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((s) => s + 1);
      } else {
        e.target.classList.add("wrong");

        setLock(true);
      }
    }
  };

  const handleNext = () => {
    if (lock) {
      setIndex((i) => i + 1);
      setQuestion(data[index]);
      setLock(false);

      let list = document.querySelectorAll("li");
      list = Array.from(list);
      list.map((li) => {
        li.classList.remove("correct");
        li.classList.remove("wrong");
      });
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz-App</h1>
      <hr />
      {index >= data.length && (
        <div className="result">
          {" "}
          <h3>Result</h3>
          <br />
          <p>
            You score{" "}
            <span
              id="score"
              className={score > data.length / 2 ? "green" : "red"}
            >
              {score}
            </span>{" "}
            out of {data.length}
          </p>
        </div>
      )}
      {index < data.length && (
        <div>
          <h3>
            {index + 1}. {question.question}
          </h3>
          <ol>
            <li onClick={(e) => handleAnswer(e, 0)}>{question.answers[0]}</li>
            <li onClick={(e) => handleAnswer(e, 1)}>{question.answers[1]}</li>
            <li onClick={(e) => handleAnswer(e, 2)}>{question.answers[2]}</li>
            <li onClick={(e) => handleAnswer(e, 3)}>{question.answers[3]}</li>
          </ol>
          <button onClick={handleNext}>Next</button>
          <p>
            {" "}
            Score {score} out of {data.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
