import React from "react";
import { connect } from "react-redux";
import SignPresenter from "./SignPresenter";
function Sign(props) {
  const { isIn } = props;
  const state = { isIn: isIn };
  return <SignPresenter state={state} />;
}

function mapStateToProps(state) {
  return { isIn: state.Sign.isIn };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Sign);
