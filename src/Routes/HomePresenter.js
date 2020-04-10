import React from "react";
import EmployeeTable from "../Components/EmTable";
import EmployeeInsult from "../Components/EmInsultContainer";
import EmployeeModify from "../Components/EmModifyContainer";
function HomePresenter(props) {
  const { modify, insult, handleInsult } = props.state;
  return insult ? (
    <>
      <EmployeeInsult />
    </>
  ) : modify ? (
    <>
      <EmployeeModify />
    </>
  ) : (
    <>
      <EmployeeTable />

      <button onClick={(e) => handleInsult(e)}>추가</button>
    </>
  );
}
export default HomePresenter;
