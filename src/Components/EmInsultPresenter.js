import React from "react";
function EmInsult(props) {
  const { handleInsult, InsultSubmit } = props.state;
  return (
    <>
      <button onClick={(e) => handleInsult(e)}>X</button>
      <div className="Modal">
        <main className="modalMain">
          <div className="modalContent">
            <div className="content">
              <span>이름:</span>
              <input className="name data" type="text" />
            </div>
            <div className="content">
              주민번호 :{" "}
              <input className="id_front data" maxLength="6" type="text" /> -
              <input className="id_back data" maxLength="1" type="password" />*
              * * * * *
            </div>
            <div className="content">
              <span>핸드폰 번호:</span>
              <input className="phone data" type="text" />
            </div>
            <div className="content">
              <span> 부서 : </span>
              <input type="text" className="team data" />
            </div>

            <div className="content">
              <span> 직책 : </span>{" "}
              <input className="position data" type="text" />
            </div>
            <div className="content">
              <span> 계약일 : </span>
              <input
                type="date"
                className="startdate data"
                defaultValue="2000-01-01"
              />
            </div>
            <div className="content">
              <span>만료일 : </span>
              <input
                type="date"
                className="enddate data"
                defaultValue="2000-01-01"
              />
            </div>
            <div className="content">
              <span>출근시간 : </span>
              <input className="intime data" type="text" />
            </div>
            <div className="content">
              <span>퇴근시간 : </span>
              <input className="outtime data" type="text" />
            </div>
            <div className="content">
              <span>상태 : </span>
              <input className="status data" type="text" />
            </div>
            <button className="submit data" onClick={(e) => InsultSubmit(e)}>
              제출
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
export default EmInsult;
