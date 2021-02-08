/* 
Main page for the application. Runs through all the questions, keeps track of score, and will
  show the final score and allow the user to sumbit their score to firebase

Each component has a Link that takes the user to the Quiz page to start the game
  - sends state to the page to tell it what info to use
*/

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { parseData } from "../util";
import axios from "axios";
// pages
import End from "./End";

export default function QuizApp() {
  // - Hooks
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [index, setIndex] = useState(1);
  const { id, nickname, difficulty, colors, title } = useLocation().state;

  useEffect(() => {
    const URL = `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficulty}&type=multiple&encode=base64`;
    axios
      .get(URL)
      .then((response) => {
        setQuestions(parseData(response.data.results));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const btn = document.querySelectorAll("#btnRef");
    btn.forEach((item) => {
      item.style.background = "none";
      item.style.border = "2px solid #21486a";
    });
  }, [index]);

  // - Functions
  function checkAnswer(e) {
    e.target.style.background = "#4392d6";

    setTimeout(() => {
      if (e.target.value === questions[index - 1].correct_answer) {
        e.target.style.background = "green";
        e.target.style.border = "2px solid green";
        setAnswered(true);
        setScore((prevState) => prevState + 1);
      } else {
        e.target.style.background = "red";
        e.target.style.border = "2px solid red";
        setAnswered(true);
      }
    }, 1000);
  }

  function nextQuestion() {
    if (!answered) return;
    setIndex((prevState) => prevState + 1);
    setAnswered(false);
  }

  function validateApp() {
    if (questions.length > 1 && index < 11) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <App>
      {index === 11 && (
        <End
          score={score}
          nickname={nickname}
          colors={colors}
          title={title}
          difficulty={difficulty}
        />
      )}
      {validateApp() && (
        <>
          {/* question */}
          <QuestionContainer>
            <ProgressBar>
              <div
                style={{
                  background: `${colors.background}`,
                  color: `${colors.color}`,
                  width: `${index}0%`,
                  height: "100%",
                  borderRadius: "2rem",
                  fontSize: ".9rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: ".3s",
                }}
              >
                {index}0%
              </div>
            </ProgressBar>
            <h1 style={{ color: "#8a93bc" }}>Question {index}/10</h1>
            <Question>{window.atob(questions[index - 1].question)}</Question>
          </QuestionContainer>
          {/* answers */}
          <AnswerContainer>
            {questions[index - 1].answers.map((question) => (
              <Answer
                key={question}
                disabled={answered ? true : false}
                id="btnRef"
                value={question}
                onClick={checkAnswer}
              >
                {window.atob(question)}
              </Answer>
            ))}
          </AnswerContainer>
          <Next onClick={nextQuestion}>Next</Next>
        </>
      )}
    </App>
  );
}

// - Styled Components - //
const App = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100vh;
  background: #252c4a;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const QuestionContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;
const ProgressBar = styled.div`
  width: 90%;
  height: 2rem;
  background: none;
  border: 1px solid #8a93bc;
  border-radius: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem;
`;
const Question = styled.h3`
  text-align: center;
  color: white;
  margin: 2rem;
  line-height: 2rem;
`;

const AnswerContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Answer = styled.button`
  text-align: left;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: white;
  background: #252c4a;
  border: 2px solid #21486a;
  margin: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.3s;
  outline: none;

  &:disabled {
    color: white;
  }
`;

const Next = styled.button`
  padding: 1rem 2rem;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background: #107eeb;
  border: none;
  border-radius: 2rem;
  margin: auto;
  cursor: pointer;
`;
