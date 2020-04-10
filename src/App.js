import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Routes/HomeContainer";
import ToDo from "./Routes/ToDoContainer";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Todo" exact component={ToDo}></Route>
    </Router>
  );
}

export default App;
