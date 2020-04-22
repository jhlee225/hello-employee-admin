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
            <span> 직원이름 : </span>
          </div>
          <div className="content">
            <span>할일</span>
            <input
              onChange={handleModifyData}
              id="emStatus"
              className="data"
              defaultValue={ModifyData.emStatus}
              type="text"
            />
          </div>
          <div className="content">
            <span>날짜</span>
            <input
              onChange={handleModifyData}
              id="emStatus"
              className="data"
              defaultValue={ModifyData.emStatus}
              type="date"
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
