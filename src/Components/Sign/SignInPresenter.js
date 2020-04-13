import React from "react";
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
        <a href="/#/Home">
          <button onClick={SubmitSignIn}>로그인</button>
        </a>
      </main>
      <footer></footer>
    </>
  );
}
export default SignInPresenter;
