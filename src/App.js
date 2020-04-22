import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Routes/HomeContainer";
import ToDo from "./Routes/ToDoContainer";
import Sign from "./Routes/SignPresenter";
import Log from "./Routes/LogContainer";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Sign}></Route>
      <Route path="/Log" component={Log}></Route>
      <Route path="/Home" component={Home}></Route>
      <Route path="/Todo" component={ToDo}></Route>
      <Route path="/Sign" component={Sign}></Route>
    </Router>
  );
}

export default App;
