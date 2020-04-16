import React from "react";
import { connect } from "react-redux";
import EmTableList from "./EmTableListContainer";

function EmTable({ data }) {
  return (
    <>
      <table className="HomeTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>부서</th>
            <th>직급</th>
            <th>재직</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {data === null || data === undefined ? (
            <></>
          ) : (
            data.map((item, key) => <EmTableList key={key} item={item} />)
          )}
        </tbody>
      </table>
    </>
  );
}
function mapStateToProps(state) {
  return { data: state.Data.Home };
}

export default connect(mapStateToProps)(EmTable);
