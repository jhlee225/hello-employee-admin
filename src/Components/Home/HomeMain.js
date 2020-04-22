import React from "react";
import Map from "../Common/Map";
import Bar from "./HomeBarContainer";
import SearchBox from "../Common/SearchBox";
import { connect } from "react-redux";
import Modal from "../Common/Modal";
import EmployeeTable from "./EmTable";
import EmployeeInsult from "./EmInsultContainer";
import EmployeeModify from "./EmModifyContainer";
import EmployeeRetire from "./EmRetirePresenter";
import EmFingerPrint from "./EmFingerPrintContainer";
function Main(props) {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-contents">
          <div className="main-contents-container">
            {props.modal ? <Modal /> : <></>}
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
                      <h2>직원 정보 조회</h2>
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
    modal: state.Home.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
