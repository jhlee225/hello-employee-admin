import React from "react";
function SignUpPresenter(props) {
  const { handleClick, handleSignData } = props.state;

  return (
    <>
      <header>
        <span>회원가입</span>
        <span onClick={handleClick}>X</span>
      </header>
      <main>
        <div>
          <span>매장이름</span>
          <input type="text" className="data" onChange={handleSignData} />
        </div>
        <div>
          <span>ID</span>
          <input type="text" className="data" onChange={handleSignData} />
          <button>중복확인</button>
        </div>
        <div>
          <span>PW</span>
          <input type="password" className="data" onChange={handleSignData} />
        </div>
        <div>
          <span>PW확인</span>
          <input type="password" className="data" onChange={handleSignData} />
        </div>
        <button>가입하기</button>
      </main>
      <footer></footer>
    </>
  );
}
export default SignUpPresenter;
