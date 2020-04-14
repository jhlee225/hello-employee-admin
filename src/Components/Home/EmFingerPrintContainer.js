import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SetEnrollData } from "../../Reducers/DataReducer";
import { OpenModal } from "../../Reducers/HomeReducer";
import EmFingerPrintPresenter from "./EmFingerPrintPresenter";
import data from "../../data";
import Axios from "axios";
function EmFingerPrintContainer(props) {
  const { SetEnrollData, EnrollData, modal, OpenModal } = props;
  useEffect(() => {
    if (EnrollData === null)
      Axios.get("/emEmployee").then((res) =>
        SetEnrollData({ data: res.data.data })
      );
    return () => SetEnrollData({ data: null });
  }, []);
  function HandleModal(e) {
    OpenModal({ modal });
  }
  const state = { EnrollData, HandleModal };
  return <EmFingerPrintPresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    HomeData: state.Data.Home,
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
