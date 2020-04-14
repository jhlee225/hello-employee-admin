import React from "react";
function EmModify(props) {
  const {
    ModifyData,
    handleModify,
    handleModifyData,
    submitModify,
  } = props.state;
  return (
    <>
      <main className="modalMain">
        <button className="X" onClick={(e) => handleModify(e)}>
          X
        </button>
        <div className="modalContent">
          <div className="content">
            <span>이름:</span>
            <input
              onChange={handleModifyData}
              className="data"
              type="text"
              id="emName"
              defaultValue={ModifyData.emName}
            />
          </div>
          <div className="content">
            생년월일 :
            <input
              type="text"
              id="emSecurityNum"
              defaultValue={ModifyData.emSecurityNum}
              className="data"
            />
          </div>

          <div className="content">
            <span>핸드폰 번호:</span>
            <input
              onChange={handleModifyData}
              className="data"
              type="tel"
              id="emPhone"
              defaultValue={ModifyData.emPhone}
            />
          </div>
          <div className="content">
            <span> 부서 : </span>
            <input
              onChange={handleModifyData}
              type="text"
              className="data"
              id="emTeam"
              defaultValue={ModifyData.emTeam}
            />
          </div>
          <div className="content">
            <span> 직책 : </span>
            <input
              onChange={handleModifyData}
              className="data"
              type="text"
              id="emPosition"
              defaultValue={ModifyData.emPosition}
            />
          </div>
          <div className="content">
            <span> 계약일 : </span>
            <input
              onChange={handleModifyData}
              type="date"
              className="data"
              id="emStartDate"
              defaultValue={ModifyData.emStartDate}
            />
          </div>
          <div className="content">
            <span>만료일 : </span>
            <input
              onChange={handleModifyData}
              type="date"
              className="data"
              id="emEndDate"
              defaultValue={ModifyData.emEndDate}
            />
          </div>
          <div className="content">
            <span>출근시간 : </span>
            <input
              onChange={handleModifyData}
              className="data"
              type="time"
              id="emOpenTime"
              defaultValue={ModifyData.emOpenTime}
            />
          </div>
          <div className="content">
            <span>퇴근시간 : </span>
            <input
              onChange={handleModifyData}
              className="outtime data"
              type="time"
              id="emCloseTime"
              defaultValue={ModifyData.emCloseTime}
            />
          </div>
          <div className="content">
            <span>상태 : </span>
            <input
              onChange={handleModifyData}
              className="data"
              type="text"
              id="emStatus"
              defaultValue={ModifyData.emStatus}
            />
          </div>
          <button onClick={submitModify} className="submit">
            제출
          </button>
        </div>
      </main>
    </>
  );
}

export default EmModify;
