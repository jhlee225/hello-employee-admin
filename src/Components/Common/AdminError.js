import React from "react";
function Main(props) {
  return (
    <div>
      <div className="main-wrapper">
        <div className="main-contents">
          <div className="main-contents-container">
            <div className="column2">
              <div className="Warn">
                ERR! 잘못된 접근입니다!
                <span>
                  <a href="/#/">→ 관리자 로그인으로 돌아가기</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
