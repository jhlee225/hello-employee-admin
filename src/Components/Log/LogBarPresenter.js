import React from "react";
import { Link } from "react-router-dom";
function Bar(props) {
  const { insult, handleTodo, handleInsult } = props.state;
  return (
    <>
      <div className="column1">
        <h1>로그관리</h1>
        <ul className="subnav">
          <li>
            <Link
              onClick={handleTodo}
              to="/Log"
              className={insult ? "none" : "current"}
            >
              출퇴근 로그 조회
            </Link>
          </li>
          <li>
            <Link
              onClick={handleInsult}
              to="/Log"
              id="Insult"
              className={insult ? "current" : "none"}
            >
              출퇴근 그래프 확인
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Bar;
