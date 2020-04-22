import React from "react";
import EnrollTableSelect from "./EnrollTableSelect";

function EmFingerPrint(props) {
  const { EnrollData } = props.state;
  return (
    <>
      <table className="HomeTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>부서</th>
            <th>직급</th>
            <th>지문보유</th>
            <th>등록</th>
          </tr>
        </thead>
        <tbody>
          {EnrollData === null ? (
            <></>
          ) : (
            EnrollData.map((item, key) => (
              <EnrollTableSelect key={key} item={item} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default EmFingerPrint;
