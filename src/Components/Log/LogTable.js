import React from "react";
import { connect } from "react-redux";
import LogTableList from "./LogTableListContainer";

function EmTable({ data }) {
  return (
    <>
      <table className="LogTable">
        <thead>
          <tr>
            <th colSpan="1">직원이름</th>
            <th colSpan="1">출근로그</th>
            <th colSpan="1">퇴근로그</th>
          </tr>
        </thead>
        <tbody>
          {data === null || data === undefined ? (
            <></>
          ) : (
            data.map((item, key) => <LogTableList key={key} item={item} />)
          )}
        </tbody>
      </table>
    </>
  );
}
function mapStateToProps(state) {
  return { data: state.Data.Todo };
}

export default connect(mapStateToProps)(EmTable);
