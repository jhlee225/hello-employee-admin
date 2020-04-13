import React from "react";
import EmployeeLists from "./EmListContainer";
function EmSelectPresenter(props) {
  return (
    <>
      <header>
        <div>직원선택</div>
        <div>
          <input type="checkbox" />
          퇴직자보기
          <input type="checkbox" />
          전체선택
        </div>
      </header>
      <nav>
        <input type="text" />
        <button type="submit">검색</button>
      </nav>
      <main id="employees">
        {props.state.map((item, index) => (
          <EmployeeLists key={index} item={item} />
        ))}
      </main>
    </>
  );
}
export default EmSelectPresenter;
