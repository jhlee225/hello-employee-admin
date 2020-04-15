import React from "react";
import { connect } from "react-redux";
import { SetisIn, SetisAdmin } from "../../Reducers/SignReducer";
import { SetSignInData } from "../../Reducers/DataReducer";
import { OpenHome } from "../../Reducers/HomeReducer";
import SignInPresenter from "./SignInPresenter";

function SignInContainer(props) {
  const { isIn, isAdmin, SetisIn, SetSignInData, SetisAdmin, OpenHome } = props;

  function handleClick(e) {
    SetisIn({ isIn });
  }
  function handleSignData(e) {
    const dataForm = document.querySelector(".data");
    const data = [];
    data.push(dataForm.value);
    SetSignInData({ data });
  }
  function SubmitSignIn(e) {
    OpenHome();
    SetisAdmin({ isAdmin });
  }
  const state = {
    handleClick: handleClick,
    handleSignData: handleSignData,
    SubmitSignIn: SubmitSignIn,
  };
  return <SignInPresenter state={state} />;
}
function mapStateToProps(state) {
  return { isIn: state.Sign.isIn, isAdmin: state.Sign.isAdmin };
}
function mapDispatchToProps(dispatch) {
  return {
    OpenHome: () => dispatch(OpenHome()),
    SetisIn: ({ isIn }) => dispatch(SetisIn({ isIn })),
    SetisAdmin: ({ isAdmin }) => dispatch(SetisAdmin({ isAdmin })),
    SetSignInData: ({ data }) => dispatch(SetSignInData({ data })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
