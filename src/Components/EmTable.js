import React from "react";
import { connect } from "react-redux";
import EmTableList from "./EmTableListContainer";

function EmTable({ data }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>사원번호</th>
            <th>이름</th>
            <th>부서</th>
            <th>직급</th>
            <th>재직여부</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td></td>
          </tr>
          {data.map((item, key) => (
            <EmTableList key={key} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}
function mapStateToProps(state) {
  return { data: state.data };
}

export default connect(mapStateToProps)(EmTable);
