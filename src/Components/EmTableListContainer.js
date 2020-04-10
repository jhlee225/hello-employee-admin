import React from "react";
import { connect } from "react-redux";
import { OpenModify, SelectEmployee } from "../store";
import EmTableListPresenter from "./EmTableListPresenter";
function EmTableListContainer(props) {
  const { item, modify, OpenModify, SelectEmployee } = props;

  function handleClick(e) {
    const selected = item.emId;
    SelectEmployee({ selected });
    OpenModify({ modify });
  }

  const state = {
    handleClick: handleClick,
  };
  return <EmTableListPresenter item={item} state={state} />;
}

function mapStateToProps(state) {
  return { modify: state.modify };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenModify: ({ modify }) => dispatch(OpenModify({ modify })),
    SelectEmployee: ({ selected }) => dispatch(SelectEmployee({ selected })),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmTableListContainer);
