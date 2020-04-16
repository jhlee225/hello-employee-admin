import React from "react";
import { Link } from "react-router-dom";
function Bar(props) {
  const {
    insult,
    retire,
    enroll,
    handleEnroll,
    handleHome,
    handleInsult,
    handleRetire,
  } = props.state;
  return (
    <>
      <div className="column1">
        <h1>직원관리</h1>
        <ul className="subnav">
          <li>
            <Link
              onClick={handleHome}
              to="/Home"
              className={
                insult ? "none" : retire ? "none" : enroll ? "none" : "current"
              }
            >
              정보 조회
            </Link>
          </li>
          <li>
            <Link
              onClick={handleInsult}
              to="/Home"
              id="Insult"
              className={insult ? "current" : "none"}
            >
              직원 추가
            </Link>
          </li>
          <li>
            <Link
              onClick={handleRetire}
              to="/Home"
              id="Retire"
              className={retire ? "current" : "none"}
            >
              퇴직 처리
            </Link>
          </li>
          <li>
            <Link
              onClick={handleEnroll}
              to="/Home"
              id="Enroll"
              className={enroll ? "current" : "none"}
            >
              지문 등록
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Bar;
