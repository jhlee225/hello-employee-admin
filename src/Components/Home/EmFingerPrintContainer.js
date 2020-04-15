import React from "react";
import { connect } from "react-redux";
import { SetEnrollData } from "../../Reducers/DataReducer";
import { OpenModal } from "../../Reducers/HomeReducer";
import EmFingerPrintPresenter from "./EmFingerPrintPresenter";
function EmFingerPrintContainer(props) {
  const { EnrollData, modal, OpenModal } = props;
  function HandleModal(e) {
    OpenModal({ modal });
  }
  const state = { EnrollData, HandleModal };
  return <EmFingerPrintPresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    EnrollData: state.Data.Enroll,
    modal: state.Home.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetEnrollData: ({ data }) => dispatch(SetEnrollData({ data })),
    OpenModal: ({ modal }) => dispatch(OpenModal({ modal })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmFingerPrintContainer);
