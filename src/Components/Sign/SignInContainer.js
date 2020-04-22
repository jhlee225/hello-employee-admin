import React from "react";
import { connect } from "react-redux";
import { SetisIn, SetisAdmin } from "../../Reducers/SignReducer";
import { SetSignInData } from "../../Reducers/DataReducer";
import { OpenHome } from "../../Reducers/HomeReducer";
import SignInPresenter from "./SignInPresenter";
import { getEmployee } from "../../Axios";

function SignInContainer(props) {
  const {
    isIn,
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
      console.log(`/shop/login/${SignData.In}`);
      getEmployee(`/shop/login/${SignData.In}`)
        .then((res) => {
          function yes() {
            alert("관리자 로그인 성공!");
            SetisAdmin({ isAdmin: false });
          }
          function no() {
            alert("비밀번호가 틀렸습니다!");
            SetisAdmin({ isAdmin: true });
          }
          console.log(res);
          res.data.data === 1 ? yes() : no();
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
