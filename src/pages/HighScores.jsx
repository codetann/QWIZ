// TODO: fix state for selected score

import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase";
import { categories } from "../data";
import { parseArray, sortArray } from "../util";
import styled from "styled-components";
import Scores from "../components/Scores";
import { Link } from "react-router-dom";

import { AppContext } from "../context/Provider";

export default function HighScores() {
  const {
    scores,
    setSelected,
    setSelectedScore,
    selectedScore,
    selected,
  } = useContext(AppContext);

  useEffect(() => {
    const index = scores.findIndex((item) => item.category === "Sports");
    setSelected("Sports");
    setSelectedScore(scores[index]);
  }, []);

  // - Functions
  function handleChange(e) {
    const index = scores.findIndex((item) => item.category === e.target.value);
    setSelected(e.target.value);
    setSelectedScore(scores[index]);
  }

  return (
    <Container>
      <NavBar>
        <Link to="/">
          <Home>Home</Home>
        </Link>
        <Selection onChange={handleChange} name="categories" id="categories">
          <Option value="Sports">Sports</Option>
          <Option value="Animals">Animals</Option>
          <Option value="Video Games">Video Games</Option>
          <Option value="History">History</Option>
          <Option value="TV">TV</Option>
          <Option value="General Knowledge">General</Option>
        </Selection>
      </NavBar>
      <Title>{selected}</Title>
      {selectedScore && (
        <Results>
          <Scores category={selected} data={sortArray(selectedScore.results)} />{" "}
        </Results>
      )}
    </Container>
  );
}

// - Styled Components - //
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  background: #252c4a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: 4rem;
`;

const NavBar = styled.div`
  max-width: 800px;
  height: 6rem;
  width: 100%;
  color: #252c4a;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home = styled.button`
  color: #8a93bc;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Selection = styled.select`
  border-radius: 0.5rem;
  color: #8a93bc;
  border: 1px solid #8a93bc;
  background: none;
  padding: 0.5rem;
  font-size: 1.5rem;
`;
const Option = styled.option`
  background: none;
  color: black;
  border: 1px solid #8a93bc;
  border-radius: 0.5rem;
`;

const Title = styled.div`
  width: 90%;
  height: 200px;
  font-size: 50px;
  color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Results = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
