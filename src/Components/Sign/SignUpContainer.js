import React from "react";
import { connect } from "react-redux";
import { SetisIn } from "../../Reducers/SignReducer";
import { SetSignUpData } from "../../Reducers/DataReducer";
import SignUpPresenter from "./SignUpPresenter";

function SignUpContainer(props) {
  const { isIn, SetisIn, SetSignUpData } = props;

  function handleClick(e) {
    SetisIn({ isIn });
  }
  function handleSignData(e) {
    const dataForm = document.querySelectorAll(".data");
    const data = [];
    for (let i = 0; i < dataForm.length; i++) {
      data.push(dataForm[i].value);
    }
    SetSignUpData({ data });
  }

  const state = {
    handleClick: handleClick,
    handleSignData: handleSignData,
  };
  return <SignUpPresenter state={state} />;
}

function mapStateToProps(state) {
  return { isIn: state.Sign.isIn, SignUpData: state.Sign.data };
}

function mapDispatchToProps(dispatch) {
  return {
    SetisIn: ({ isIn }) => dispatch(SetisIn({ isIn })),
    SetSignUpData: ({ data }) => dispatch(SetSignUpData({ data })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
