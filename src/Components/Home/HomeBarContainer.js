import React from "react";
import { connect } from "react-redux";
import {
  OpenHome,
  OpenInsult,
  OpenRetire,
  OpenEnroll,
} from "../../Reducers/HomeReducer";
import BarPresenter from "./HomeBarPresenter";
function Bar({
  insult,
  retire,
  enroll,
  OpenHome,
  OpenInsult,
  OpenRetire,
  OpenEnroll,
}) {
  function handleHome(e) {
    OpenHome();
  }
  function handleInsult(e) {
    OpenInsult();
  }
  function handleRetire(e) {
    OpenRetire();
  }
  function handleEnroll(e) {
    OpenEnroll();
  }
  const state = {
    insult: insult,
    retire: retire,
    enroll: enroll,
    handleEnroll: handleEnroll,
    handleInsult: handleInsult,
    handleRetire: handleRetire,
    handleHome: handleHome,
  };
  return (
    <>
      <BarPresenter state={state} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    insult: state.Home.insult,
    retire: state.Home.retire,
    enroll: state.Home.enroll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenHome: () => dispatch(OpenHome()),
    OpenInsult: () => dispatch(OpenInsult()),
    OpenRetire: () => dispatch(OpenRetire()),
    OpenEnroll: () => dispatch(OpenEnroll()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Bar);
