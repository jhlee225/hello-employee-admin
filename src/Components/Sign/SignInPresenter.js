import React from "react";
import { Link } from "react-router-dom";
function SignInPresenter(props) {
  const { handleSignData, SubmitSignIn } = props.state;

  return (
    <>
      <header>
        <span>관리자 로그인</span>
      </header>
      <main>
        <div>
          <span>PW</span>
          <input type="password" className="data" onChange={handleSignData} />
        </div>
        <Link to="/Home">
          <button onClick={SubmitSignIn}>로그인</button>
        </Link>
      </main>
      <footer></footer>
    </>
  );
}
export default SignInPresenter;
