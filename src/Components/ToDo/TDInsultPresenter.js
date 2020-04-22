import React from "react";
function EmInsult(props) {
  const { handleInsultData, InsultSubmit, data } = props.state;
  return (
    <>
      <div className="templates">
        <div>일정A</div>
        <div>일정B</div>
        <div>일정C</div>
      </div>
      <div className="Modal">
        <main className="modalMain">
          <div className="modalContent">
            <div className="content">
              <select
                onChange={handleInsultData}
                className="data"
                id="emName"
                name="employee"
              >
                <option>직원선택</option>
                {data === null || data === undefined ? (
                  <></>
                ) : (
                  data.map((item, key) => (
                    <option key={key} id={key}>
                      {item.emName}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="content">
              <span>할일</span>
              <input
                type="text"
                onChange={handleInsultData}
                className="data"
                id="toDo"
              />
            </div>
            <div className="content">
              <span>날짜</span>
              <input
                type="date"
                onChange={handleInsultData}
                className="data"
                id="toDoDate"
              />
            </div>
            <button onClick={InsultSubmit}>제출</button>
          </div>
        </main>
      </div>
    </>
  );
}
export default EmInsult;
