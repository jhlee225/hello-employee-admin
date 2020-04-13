import React from "react";
import { connect } from "react-redux";
import EmTableList from "./EmTableListContainer";

function EmTable({ data }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>이름</th>
            <th>부서</th>
            <th>직급</th>
            <th>재직</th>
            <th></th>
          </tr>
          {data === null ? (
            <tr>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
          ) : (
            data.map((item, key) => <EmTableList key={key} item={item} />)
          )}
        </tbody>
      </table>
    </>
  );
}
function mapStateToProps(state) {
  return { data: state.Home.data.Home };
}

export default connect(mapStateToProps)(EmTable);
