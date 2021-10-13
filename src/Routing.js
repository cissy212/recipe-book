import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import Recipe from "./screens/Recipe";
import Scores from "./screens/Scores";

export default function Routing() {
  return (
    <Router>
      <Route path="*">
        <Home />
      </Route>
      <Route exact path="/recipes">
        <Recipe />
      </Route>
      <Route path="/scores">
        <Scores />
      </Route>
      <Route path="*">
        <Redirect to="/"></Redirect>
      </Route>
    </Router>
  );
}
