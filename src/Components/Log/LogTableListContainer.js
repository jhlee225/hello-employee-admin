import React from "react";
import { connect } from "react-redux";
import { OpenModify } from "../../Reducers/HomeReducer";
import { SetModifyData } from "../../Reducers/DataReducer";
import LogTableListPresenter from "./LogTableListPresenter";
function EmTableListContainer(props) {
  const { item, modify, OpenModify, SetModifyData } = props;

  function handleClick(e) {
    SetModifyData({ data: item });
    OpenModify({ modify });
  }

  const state = {
    handleClick: handleClick,
  };
  return <LogTableListPresenter item={item} state={state} />;
}

function mapStateToProps(state) {
  return { modify: state.Home.modify };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenModify: ({ modify }) => dispatch(OpenModify({ modify })),
    SetModifyData: ({ data }) => dispatch(SetModifyData({ data })),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmTableListContainer);
