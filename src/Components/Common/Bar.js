import React from "react";
function Map(props) {
  return (
    <>
      <div className="column1">
        <h1>직원관리</h1>
        <ul className="subnav">
          <li>
            <a href="/#/Home" className="current">
              정보 수정
            </a>
          </li>
          <li>
            <a href="/#">직원 추가</a>
          </li>
          <li>
            <a href="/#">퇴직 처리</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Map;
