import React from "react";
import Map from "./Map";
import Bar from "./Bar";
import EmployeeTable from "../Home/EmTable";
import EmployeeInsult from "../Home/EmInsultContainer";
import EmployeeModify from "../Home/EmModifyContainer";
function Main(props) {
  return props.state.insult ? (
    <>
      <div className="main-wrapper">
        <div className="main-contents">
          <div className="main-contents-container">
            <Bar />
            <div className="column2">
              <div className="news">
                <ul className="news-contents">
                  <li>
                    <h2>직원 추가</h2>
                    <EmployeeInsult />
                  </li>
                </ul>
              </div>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </>
  ) : props.state.modify ? (
    <>
      <div className="main-wrapper">
        <div className="main-contents">
          <div className="main-contents-container">
            <Bar />
            <div className="column2">
              <div className="news">
                <ul className="news-contents">
                  <li>
                    <h2>직원 정보 수정</h2>
                    <EmployeeModify />
                  </li>
                </ul>
              </div>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="main-wrapper">
        <div className="main-contents">
          <div className="main-contents-container">
            <Bar />
            <div className="column2">
              <div className="news">
                <ul className="news-contents">
                  <li>
                    <h2>직원 정보 수정</h2>
                    <EmployeeTable />
                    <button onClick={(e) => props.state.handleInsult(e)}>
                      추가
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
