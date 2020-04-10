import React from "react";
function EmInsult(props) {
  const { base, handleModify } = props.state;
  return (
    <>
      <button onClick={(e) => handleModify(e)}>X</button>
      <main className="modalMain">
        <form className="modalContent">
          <div className="content">
            <span>이름:</span>
            <input
              defaultValue={base.emName}
              className="name data"
              type="text"
            />
          </div>
          <div className="content">
            생년월일 : {base.emSecurityNum.slice(0, 6)}
          </div>

          <div className="content">
            <span>핸드폰 번호:</span>
            <input
              defaultValue={base.emPhone}
              className="phone data"
              type="tel"
            />
          </div>
          <div className="content">
            <span> 부서 : </span>
            <input
              type="text"
              className="team data"
              defaultValue={base.emTeam}
            />
          </div>
          <div className="content">
            <span> 직책 : </span>
            <input
              defaultValue={base.emPosition}
              className="position data"
              type="text"
            />
          </div>
          <div className="content">
            <span> 계약일 : </span>
            <input
              defaultValue={base.emStartDate}
              type="date"
              className="startdate data"
            />
          </div>
          <div className="content">
            <span>만료일 : </span>
            <input
              defaultValue={base.emEndDate}
              type="date"
              className="enddate data"
            />
          </div>
          <div className="content">
            <span>출근시간 : </span>
            <input
              defaultValue={base.emOpenTime}
              className="intime data"
              type="time"
            />
          </div>
          <div className="content">
            <span>퇴근시간 : </span>
            <input
              defaultValue={base.emCloseTime}
              className="outtime data"
              type="time"
            />
          </div>
          <div className="content">
            <span>상태 : </span>
            <input
              className="status data"
              defaultValue={base.emStatus}
              type="text"
            />
          </div>
          <button className="submit">제출</button>
        </form>
      </main>
    </>
  );
}
export default EmInsult;
