import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import firebase from "../firebase";

export default function End({ score, title, colors, difficulty }) {
  const inputRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  // - Functions
  function handleSubmit(e) {
    if (inputRef.current.value === "") return;
    e.preventDefault();
    const scoreRef = firebase.database().ref(title);
    const userScore = {
      nickname: inputRef.current.value,
      score: score,
      difficulty: difficulty,
    };
    scoreRef.push(userScore);
    setSubmitted(true);
  }

  return (
    <EndPage>
      <Title style={{ background: colors.background, color: colors.color }}>
        <h1 style={{ marginBottom: "2rem" }}>{title}</h1>
        <h3>Your Score</h3>
        <h2>{score}</h2>
      </Title>
      <NameContainer>
        <Nickname>Nick name:</Nickname>
        <Input
          ref={inputRef}
          placeholder="Enter nickname here..."
          type="text"
        />
      </NameContainer>
      <ButtonContainer>
        <Link to="/">
          <Home>Home</Home>
        </Link>
        <Submit disabled={submitted ? true : false} onClick={handleSubmit}>
          {submitted ? "Submitted" : "Submit"}
        </Submit>
      </ButtonContainer>
    </EndPage>
  );
}

// - Styled Components - //
const EndPage = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100vh;
  background: #252c4a;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  width: 90%;
  height: 300px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const NameContainer = styled.div`
  width: 90%;
  height: 4rem;
  background: #cbccd2;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-radius: 1rem;
`;
const Nickname = styled.h4`
  color: #333333;
  width: 8rem;
  margin-right: 2rem;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  border-radius: 1rem;
  font-size: 18px;
  color: #333333;
  outline: none;
  &::placeholder {
    color: #8a8a8a;
  }
`;

const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
`;
const Submit = styled.button`
  background-color: #00d564;
  font-weight: bold;
  color: white;
  border-radius: 2rem;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
`;
const Home = styled.button`
  color: #8a93bc;
  border: 1px solid #8a93bc;
  background: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
