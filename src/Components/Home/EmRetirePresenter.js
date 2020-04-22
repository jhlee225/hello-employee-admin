import React from "react";
import { connect } from "react-redux";
import EmTableSelect from "./EmTableSelect";
function EmRetire(props) {
  const { RetireData } = props;
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
          {RetireData === null ? (
            <></>
          ) : (
            RetireData.map((item, key) => (
              <EmTableSelect key={key} item={item} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

function mapStateToProps(state) {
  return {
    RetireData: state.Data.Retire,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EmRetire);
