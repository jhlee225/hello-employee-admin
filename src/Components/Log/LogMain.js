import React from "react";
import Map from "../Common/Map";
import Bar from "./LogBarContainer";
import { connect } from "react-redux";
import LogTable from "./LogTable";
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
                  <li>
                    <h2>로그 조회</h2>
                    <LogTable />
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
