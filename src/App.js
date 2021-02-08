import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
// pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizApp from "./pages/QuizApp";
import HighScores from "./pages/HighScores";

function App() {
  return (
    <Application>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/quiz/:category" exact component={QuizApp} />
        <Route path="/highscores" exact component={HighScores} />
      </Router>
    </Application>
  );
}

// - Styled Components - //
const Application = styled.div`
  width: 100%;
  height: auto;
  background: #252c4a;
  display: flex;
  justify-content: center;
`;

export default App;
