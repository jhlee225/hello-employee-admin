import React from "react";
import { connect } from "react-redux";
import ToDoPresenter from "./ToDoPresenter";
function ToDo({ state }) {
  return <ToDoPresenter state={state} />;
}

function mapStateToProps(state) {
  return { state: state };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
