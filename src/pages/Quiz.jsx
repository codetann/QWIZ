// TODO: get rid of nickname state

import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
// components
import AppBar from "../components/AppBar";

export default function Quiz() {
  // - hooks
  const [nickname, setNickname] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const { title, id, colors } = useLocation().state;

  // - Functions
  function handleClick(e) {
    setDifficulty(e.target.value);
  }

  return (
    <Container>
      <AppBar />
      <Title style={{ background: colors.background, color: colors.color }}>
        <h3>{title}</h3>
      </Title>
      {/* --- Inputs --- */}

      <DifficultyContainer>
        <DiffBtn
          onClick={handleClick}
          value="easy"
          style={{
            background: "#79d670",
            borderRadius: "1rem 0 0 1rem",
            cursor: "pointer",
          }}
        >
          Easy
        </DiffBtn>
        <DiffBtn
          onClick={handleClick}
          value="medium"
          style={{ background: "#dcdf39", cursor: "pointer" }}
        >
          Medium
        </DiffBtn>
        <DiffBtn
          onClick={handleClick}
          value="hard"
          style={{
            background: "#e2563e",
            borderRadius: "0 1rem 1rem 0",
            cursor: "pointer",
          }}
        >
          Hard
        </DiffBtn>
      </DifficultyContainer>
      {/* --- buttons --- */}
      <ButtonContainer>
        <Link to="/">
          <BackBtn>Back</BackBtn>
        </Link>
        <Link
          to={{
            pathname: `/quiz/${title}`,
            state: { id, nickname, difficulty, colors, title },
          }}
        >
          <StartBtn>Start Quiz</StartBtn>
        </Link>
      </ButtonContainer>
    </Container>
  );
}

// - Styled Components - //
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100vh;
  background: #252c4a;
  display: flex;
  justify-content: space-between;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

/* inputs */
const DifficultyContainer = styled.div`
  width: 90%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DiffBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  font-weight: bold;

  &:focus {
    opacity: 0.5;
  }
`;

/* buttons */
const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
`;
const StartBtn = styled.button`
  background-color: #00d564;
  font-weight: bold;
  color: white;
  border-radius: 2rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
`;
const BackBtn = styled.button`
  color: #8a93bc;
  border: 1px solid #8a93bc;
  background: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
