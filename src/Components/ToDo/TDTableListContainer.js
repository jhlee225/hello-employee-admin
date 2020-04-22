import React from "react";
import { connect } from "react-redux";
import { SetTodoModify } from "../../Reducers/ToDoReducer";
import { SetModifyData } from "../../Reducers/DataReducer";
import TDTableListPresenter from "./TDTableListPresenter";
function EmTableListContainer(props) {
  const { item, modify, SetTodoModify, SetModifyData } = props;

  function handleClick(e) {
    SetModifyData({ data: item });
    SetTodoModify({ modify });
  }

  const state = {
    handleClick: handleClick,
  };
  return <TDTableListPresenter item={item} state={state} />;
}

function mapStateToProps(state) {
  return { modify: state.Home.modify };
}

function mapDispatchToProps(dispatch) {
  return {
    SetTodoModify: ({ modify }) => dispatch(SetTodoModify({ modify })),
    SetModifyData: ({ data }) => dispatch(SetModifyData({ data })),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmTableListContainer);
