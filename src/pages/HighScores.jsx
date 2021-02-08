// TODO: fix state for selected score

import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { categories } from "../data";
import { parseArray, sortArray } from "../util";
import styled from "styled-components";
import Scores from "../components/Scores";
import { Link } from "react-router-dom";

export default function HighScores() {
  // - Hooks
  const [scores, setScores] = useState([]);
  const [selected, setSelected] = useState("Sports");
  const [selecedScore, setSelectedScore] = useState(false);

  useEffect(() => {
    const arr = [];
    /* Filters through each category and creates an array with the 
        data that was received through firebase. If there is no data returned,
        an object is created with an the category and no results.
    */
    categories.forEach((item) => {
      const scoreRef = firebase.database().ref(item.category);

      scoreRef.on("value", (snapshot) => {
        if (snapshot.val() === null)
          arr.push({ category: item.category, results: [] });
        arr.push(parseArray(snapshot.val(), item.category));
      });
    });

    const newArr = arr.filter((element) => element !== undefined);
    setScores(newArr);

    const index = newArr.findIndex((item) => item.category === selected);
    setSelectedScore(newArr[index]);
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
      <Results>
        {selecedScore && (
          <Scores category={selected} data={sortArray(selecedScore.results)} />
        )}
      </Results>
    </Container>
  );
}

// - Styled Components - //
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  background: #252c4a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const NavBar = styled.div`
  width: 90%;
  height: 5rem;
  background: #252c4a;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home = styled.button`
  padding: 0.5rem 2rem;
  color: #8a93bc;
  border: none;
  background: none;
  cursor: pointer;
`;

const Selection = styled.select`
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #8a93bc;
  border: 1px solid #8a93bc;
  background: none;
`;
const Option = styled.option`
  background: none;
  color: black;
  border: 1px solid #8a93bc;
  border-radius: 0.5rem;
`;

const Title = styled.div`
  width: 90%;
  height: 300px;
  font-size: 32px;
  color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background: #c96a6a;
`;

const Results = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
