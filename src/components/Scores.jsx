import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Scores({ data, category }) {
  // - Hooks
  const [easy, setEasy] = useState([]);
  const [medium, setMedium] = useState([]);
  const [hard, setHard] = useState([]);

  useEffect(() => {
    // resets state when the data changes.
    // without this, state will keep adding names to prevState when data changes
    setEasy([]);
    setMedium([]);
    setHard([]);

    data.forEach((item) => {
      if (item.data.difficulty === "easy")
        setEasy((prevState) => [...prevState, item]);
      if (item.data.difficulty === "medium")
        setMedium((prevState) => [...prevState, item]);
      if (item.data.difficulty === "hard")
        setHard((prevState) => [...prevState, item]);
    });
  }, [data, category]);

  return (
    <Container>
      {/* EASY */}
      <ScoreContainer>
        <EasyTitle>
          <h1>Easy</h1>
        </EasyTitle>
        {easy.map((item, i) => (
          <Score key={item.id}>
            <h3>#{i + 1}</h3>
            <p>{item.data.nickname}</p>
            <p>Score: {item.data.score}</p>
          </Score>
        ))}
      </ScoreContainer>
      {/* MEDIUM */}
      <ScoreContainer>
        <MediumTitle>
          <h1>Medium</h1>
        </MediumTitle>
        {medium.map((item, i) => (
          <Score key={item.id}>
            <h3>#{i + 1}</h3>
            <p>{item.data.nickname}</p>
            <p>Score: {item.data.score}</p>
          </Score>
        ))}
      </ScoreContainer>
      {/* HARD */}
      <ScoreContainer>
        <HardTitle>
          <h1>Hard</h1>
        </HardTitle>
        {hard.map((item, i) => (
          <Score key={item.id}>
            <h3>#{i + 1}</h3>
            <p>{item.data.nickname}</p>
            <p>Score: {item.data.score}</p>
          </Score>
        ))}
      </ScoreContainer>
    </Container>
  );
}

// - Styled Components - //
const Container = styled.div`
  width: 100%;
  max-width: 800px;
`;

const ScoreContainer = styled.div`
  width: 100%;
`;
const EasyTitle = styled.div`
  width: 100%;
  height: 6rem;
  background: #79d670;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const MediumTitle = styled.div`
  width: 100%;
  height: 6rem;
  background: #dcdf39;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const HardTitle = styled.div`
  width: 100%;
  height: 6rem;
  background: #e2563e;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const Score = styled.div`
  width: 100%;
  background: white;
  height: 4rem;
  border-radius: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;
