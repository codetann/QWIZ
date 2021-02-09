import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <Container>
      <h1>QWIZ</h1>
      <Link to="/highscores">
        <HighScore>High Scores</HighScore>
      </Link>
    </Container>
  );
}

// - Styled Components
const Container = styled.div`
  max-width: 800px;
  height: 6rem;
  width: 90%;
  color: #dfdfdf;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HighScore = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background: none;
  color: #8a93bc;
  border: 1px solid #8a93bc;
  border-radius: 1rem;
  cursor: pointer;
`;
