import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./screens/Home";
import Recipe from "./screens/Recipe";
import Scores from "./screens/Scores";

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipes/:id/:source">
          <Recipe />
        </Route>
        <Route path="/scores">
          <Scores />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}
