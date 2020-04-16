import React from "react";
import Map from "../Common/Map";
import Bar from "./TodoBarContainer";
import { connect } from "react-redux";
import ToDoTable from "./TDTable";
import ToDoInsult from "./TDInsultContainer";
import ToDoModify from "./TDModifyContainer";
function Main(props) {
  const { modify, insult, remove } = props;
  return (
    <>
      <div className="main-wrapper">
        <div className="main-contents">
          <div className="main-contents-container">
            <Bar />
            <div className="column2">
              <div className="news">
                <ul className="news-contents">
                  {insult ? (
                    <li>
                      <h2>일정 추가</h2>
                      <ToDoInsult />
                    </li>
                  ) : remove ? (
                    <li>
                      <h2>일정 삭제</h2>
                    </li>
                  ) : modify ? (
                    <li>
                      <h2>일정 내용 수정</h2>
                      <ToDoModify />
                    </li>
                  ) : (
                    <li>
                      <h2>일정 조회</h2>
                      <ToDoTable />
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
    modify: state.ToDo.modify,
    insult: state.ToDo.insult,
    remove: state.ToDo.remove,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
