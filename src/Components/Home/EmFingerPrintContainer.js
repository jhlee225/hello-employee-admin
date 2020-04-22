import React from "react";
import { connect } from "react-redux";
import { SetEnrollData } from "../../Reducers/DataReducer";
import EmFingerPrintPresenter from "./EmFingerPrintPresenter";
function EmFingerPrintContainer(props) {
  const { EnrollData } = props;

  const state = { EnrollData };
  return <EmFingerPrintPresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    EnrollData: state.Data.Enroll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetEnrollData: ({ data }) => dispatch(SetEnrollData({ data })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmFingerPrintContainer);
