import React from "react";
import { connect } from "react-redux";
import {
  OpenTodo,
  SetTodoModify,
  OpenTodoInsult,
  OpenTodoRemove,
} from "../../Reducers/ToDoReducer";
import BarPresenter from "./LogBarPresenter";
function Bar(props) {
  const {
    insult,
    remove,
    OpenTodo,
    SetTodoModify,
    OpenTodoInsult,
    OpenTodoRemove,
  } = props;
  function handleTodo(e) {
    SetTodoModify({ modify: true });
    OpenTodo();
  }
  function handleInsult(e) {
    OpenTodoInsult();
  }
  function handleRemove(e) {
    OpenTodoRemove();
  }
  const state = {
    insult: insult,
    remove: remove,
    handleTodo: handleTodo,
    handleInsult: handleInsult,
    handleRemove: handleRemove,
  };
  return (
    <>
      <BarPresenter state={state} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    insult: state.ToDo.insult,
    remove: state.ToDo.remove,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetTodoModify: ({ modify }) => dispatch(SetTodoModify({ modify })),
    OpenTodo: () => dispatch(OpenTodo()),
    OpenTodoInsult: () => dispatch(OpenTodoInsult()),
    OpenTodoRemove: () => dispatch(OpenTodoRemove()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Bar);
