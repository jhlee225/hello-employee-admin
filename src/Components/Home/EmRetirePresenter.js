import React from "react";
import EmTableSelect from "./EmTableSelect";
function EmRetire(props) {
  const { RetireData, RetireSubmit } = props.state;
  return (
    <>
      <div className="news">
        <ul className="news-contents">
          <li>
            <table>
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
            <button onClick={RetireSubmit}>퇴직처리</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default EmRetire;
