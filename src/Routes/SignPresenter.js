import React from "react";
import SignUp from "../Components/Sign/SignUpContainer";
import SignIn from "../Components/Sign/SignInContainer";
function SignPresenter(props) {
  const { isIn } = props.state;
  return <>{isIn ? <SignIn /> : <SignUp />}</>;
}
export default SignPresenter;
