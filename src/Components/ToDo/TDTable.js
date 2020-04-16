import React from "react";
import { connect } from "react-redux";
// import TDTableList from "./TDTableListContainer";

function EmTable({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="moveDate" colSpan="1">
              {"<"}
            </th>
            <th colSpan="4"> 일정</th>
            <th className="moveDate" colSpan="1">
              {">"}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {data === null || data === undefined ? (
            <></>
          ) : (
            data.map((item, key) => <TDTableList key={key} item={item} />)
          )} */}
          <tr>
            <td>직원</td>
            <td>04.14</td>
            <td>04.15</td>
            <td>04.16</td>
            <td>04.17</td>
            <td>04.18</td>
          </tr>
          <tr className="hours">
            <td>김수진</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="hours">
            <td>윤보민</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="hours">
            <td>이재혁</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
function mapStateToProps(state) {
  return { data: state.Data.Home };
}

export default connect(mapStateToProps)(EmTable);
