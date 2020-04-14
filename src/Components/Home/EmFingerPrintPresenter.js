import React from "react";
import EnrollTableSelect from "./EnrollTableSelect";
function EmModify(props) {
  const { EnrollData } = props.state;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>부서</th>
            <th>직급</th>
            <th>지문보유</th>
            <th>등록/재등록</th>
          </tr>
        </thead>
        <tbody>
          {EnrollData === null ? (
            <tr>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
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

export default EmModify;
