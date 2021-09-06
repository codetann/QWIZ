import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { MainLayout } from "./components/layout";
// pages
//import Home from "./pages/Home";
//import Quiz from "./pages/Quiz";
import QuizApp from "./pages/QuizApp";
//import HighScores from "./pages/HighScores";
// new pages
import { Home } from "./pages/home";
import { Setup } from "./pages/setup";
import { Quiz } from "./pages/quiz";
import { HighScores } from "./pages/scores";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/highscores" exact component={HighScores} />
        <MainLayout>
          <Route path="/" exact component={Home} />
          <Route path="/setup" exact component={Setup} />
          <Route path="/quiz/:category" exact component={Quiz} />
        </MainLayout>
      </Switch>
    </Router>
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
