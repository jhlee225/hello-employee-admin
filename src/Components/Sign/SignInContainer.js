import React from "react";
import { connect } from "react-redux";
import { SetisIn, SetisAdmin } from "../../Reducers/SignReducer";
import { SetSignInData } from "../../Reducers/DataReducer";
import { OpenHome } from "../../Reducers/HomeReducer";
import SignInPresenter from "./SignInPresenter";
import { postEmployee } from "../../Axios";

function SignInContainer(props) {
  const {
    isIn,
    isAdmin,
    SignData,
    SetisIn,
    SetSignInData,
    SetisAdmin,
    OpenHome,
  } = props;

  function handleClick(e) {
    SetisIn({ isIn });
  }

  function handleSignData(e) {
    const dataForm = document.querySelector(".data");
    const data = [];
    data.push(dataForm.value);
    SetSignInData({ data: data[0] });
  }

  function SubmitSignIn(e) {
    OpenHome();
    if (SignData === null) {
      alert("비밀번호를 입력해주세요!");
    } else {
      const newdata = JSON.stringify({ pw: SignData.In });
      console.log(newdata);
      postEmployee("/shop/login", newdata)
        .then((res) => {
          function yesOrNo() {
            alert("관리자 로그인 성공!");
            SetisAdmin({ isAdmin });
          }
          console.log(res);
          res.data ? yesOrNo() : alert("비밀번호가 틀렸습니다!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
  return {
    isIn: state.Sign.isIn,
    isAdmin: state.Sign.isAdmin,
    SignData: state.Data.Sign,
  };
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
