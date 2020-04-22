import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SetisAdmin } from "../../Reducers/SignReducer";
function SignInPresenter(props) {
  const { handleSignData, SubmitSignIn } = props.state;
  const { isAdmin, SetisAdmin } = props;
  function HandleLogout(e) {
    SetisAdmin({ isAdmin });
  }
  return (
    <>
      <div className="bg">
        <header className="signHeader">
          <div className="header-container">
            <h1>Hello Employee Login</h1>
          </div>
        </header>
        <div className="Signcontents">
          <div className="Signcontents-container">
            <div id="login_form">
              <h1 className="login_title">관리자 페이지 로그인</h1>

              <p className="login_line">
                <label>
                  비밀번호
                  <br />
                  <input
                    type="password"
                    name="password"
                    className="data"
                    onChange={handleSignData}
                  />
                </label>
              </p>
              <nav className="inputNav">
                <Link to="/Home">
                  <input
                    type="submit"
                    onClick={SubmitSignIn}
                    className="j"
                    value="로그인"
                  />
                </Link>
                <li className="cancel">
                  <a onClick={HandleLogout} href="/employee_index">
                    <input type="submit" className="i" value="취소" />
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <footer className="SignFooter">
          <div className="footer-container">
            <p>©Hello Employee</p>
          </div>
        </footer>
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return { isAdmin: state.Sign.isAdmin };
}
function mapDispatchToProps(dispatch) {
  return {
    SetisAdmin: ({ isAdmin }) => dispatch(SetisAdmin({ isAdmin })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInPresenter);
