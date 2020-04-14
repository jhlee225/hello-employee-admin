import React from "react";
import { connect } from "react-redux";
import ToDoPresenter from "./ToDoPresenter";
function ToDo(props) {
  return <ToDoPresenter state={props} />;
}

function mapStateToProps(state) {
  return { isAdmin: state.Sign.isAdmin };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
