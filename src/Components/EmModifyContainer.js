import React from "react";
import { connect } from "react-redux";
import { OpenModify } from "../store";
import EmModifyPresenter from "./EmModifyPresenter";
function EmInsult({ modify, selected, data, OpenModify }) {
  let base;

  for (let i = 0; i < data.length; i++) {
    if (data[i].emId === selected) {
      base = data[i];
    }
  }

  function handleModify(e) {
    OpenModify({ modify });
  }

  function ModifySubmit(e) {}

  const state = { base, handleModify };
  return <EmModifyPresenter state={state} />;
}
function mapStateToProps(state) {
  return { data: state.data, modify: state.modify, selected: state.selected };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenModify: ({ modify }) => dispatch(OpenModify({ modify })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmInsult);
