import React from "react";
function EmInsult(props) {
  const { handleInsultData, InsultSubmit } = props.state;
  return (
    <>
      <div className="Modal">
        <main className="modalMain">
          <div className="modalContent">
            <div className="content">
              <span>이름:</span>
              <input
                id="emName"
                className="name data"
                type="text"
                onChange={handleInsultData}
              />
            </div>
            <div className="content">
              주민번호 :{" "}
              <input
                id="emSecurityNum"
                className="id_front data"
                maxLength="8"
                type="text"
                onChange={handleInsultData}
              />
              * * * * * *
            </div>
            <div className="content">
              <span>핸드폰 번호:</span>
              <input
                id="emPhone"
                className="phone data"
                type="text"
                onChange={handleInsultData}
              />
            </div>
            <div className="content">
              <span> 부서 : </span>
              <input
                id="emTeam"
                type="text"
                className="team data"
                onChange={handleInsultData}
              />
            </div>

            <div className="content">
              <span> 직책 : </span>{" "}
              <input
                id="emPosition"
                className="position data"
                type="text"
                onChange={handleInsultData}
              />
            </div>
            <div className="content">
              <span> 계약일 : </span>
              <input
                id="emStartDate"
                onChange={handleInsultData}
                type="date"
                className="startdate data"
                defaultValue="2000-01-01"
              />
            </div>
            <div className="content">
              <span>만료일 : </span>
              <input
                id="emEndDate"
                onChange={handleInsultData}
                type="date"
                className="enddate data"
                defaultValue="2000-01-01"
              />
            </div>
            <div className="content">
              <span>출근시간 : </span>
              <input
                id="emOpenTime"
                className="intime data"
                onChange={handleInsultData}
                type="text"
              />
            </div>
            <div className="content">
              <span>퇴근시간 : </span>
              <input
                id="emCloseTime"
                className="outtime data"
                onChange={handleInsultData}
                type="text"
              />
            </div>
            <div className="content">
              <span>상태 : </span>
              <input
                id="enStatus"
                className="status data"
                onChange={handleInsultData}
                type="text"
              />
            </div>
            <button className="submit" onClick={(e) => InsultSubmit(e)}>
              제출
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
export default EmInsult;
