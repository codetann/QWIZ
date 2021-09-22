/**
 * All routes related to application
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// layout
import { MainLayout } from "./components/layout";
// pages
import { Home } from "./pages/home";
import { Setup } from "./pages/setup";
import { Quiz } from "./pages/quiz";
// import { HighScores } from "./pages/scores";

function App() {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/" exact component={Home} />
          <Route path="/setup" exact component={Setup} />
          <Route path="/quiz/:category" exact component={Quiz} />
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
