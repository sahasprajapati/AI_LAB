import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lab2 from "./pages/lab2/lab2";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Lab2} />
      </Switch>
    </Router>
  );
};
export default App;
