import React from "react";
import { Link } from "react-router-dom";
function Bar(props) {
  const {
    insult,
    remove,
    handleTodo,
    handleInsult,
    handleRemove,
  } = props.state;
  return (
    <>
      <div className="column1">
        <h1>일정관리</h1>
        <ul className="subnav">
          <li>
            <Link
              onClick={handleTodo}
              to="/Todo"
              className={insult ? "none" : remove ? "none" : "current"}
            >
              일정 조회
            </Link>
          </li>
          <li>
            <Link
              onClick={handleInsult}
              to="/Todo"
              id="Insult"
              className={insult ? "current" : "none"}
            >
              일정 추가
            </Link>
          </li>
          <li>
            <Link
              onClick={handleRemove}
              to="/Todo"
              id="Retire"
              className={remove ? "current" : "none"}
            >
              일정 삭제
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Bar;
