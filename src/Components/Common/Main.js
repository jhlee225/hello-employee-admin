import React from "react";
import Map from "./Map";
import Bar from "./BarContainer";
import SearchBox from "./SearchBox";
import { connect } from "react-redux";
import EmployeeTable from "../Home/EmTable";
import EmployeeInsult from "../Home/EmInsultContainer";
import EmployeeModify from "../Home/EmModifyContainer";
import EmployeeRetire from "../Home/EmRetireContainer";
import EmFingerPrint from "../Home/EmFingerPrintContainer";
function Main(props) {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-contents">
          <div className="main-contents-container">
            <Bar />
            <div className="column2">
              <div className="news">
                <ul className="news-contents">
                  {props.insult ? (
                    <li>
                      <h2>직원 추가</h2>
                      <EmployeeInsult />
                    </li>
                  ) : props.modify ? (
                    <li>
                      <h2>직원 정보 수정</h2>
                      <EmployeeModify />
                    </li>
                  ) : props.retire ? (
                    <li>
                      <h2>직원 퇴직 처리</h2>
                      <SearchBox />
                      <EmployeeRetire />
                    </li>
                  ) : props.enroll ? (
                    <li>
                      <h2>직원 지문 등록</h2>
                      <SearchBox />
                      <EmFingerPrint />
                    </li>
                  ) : (
                    <li>
                      <h2>직원 정보 수정</h2>
                      <SearchBox />
                      <EmployeeTable />
                    </li>
                  )}
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
function mapStateToProps(state) {
  return {
    modify: state.Home.modify,
    insult: state.Home.insult,
    retire: state.Home.retire,
    enroll: state.Home.enroll,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
