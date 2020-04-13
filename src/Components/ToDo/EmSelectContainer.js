import React from "react";
import { connect } from "react-redux";
import EmSelectPresenter from "./EmSelectPresenter";
function EmSelect({ state }) {
  return <EmSelectPresenter state={state} />;
}

function mapStateToProps(state) {
  return { state: state.Home.data };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(EmSelect);
