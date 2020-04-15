import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Routes/HomeContainer";
import ToDo from "./Routes/ToDoContainer";
import Sign from "./Routes/SignContainer";
function App() {
  return (
    <Router>
      <Route path="/Home" component={Home}></Route>
      <Route path="/Todo" component={ToDo}></Route>
      <Route path="/" component={Sign}></Route>
    </Router>
  );
}

export default App;
