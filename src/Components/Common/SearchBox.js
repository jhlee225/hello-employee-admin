import React from "react";
import { connect } from "react-redux";
import {
  SetEnrollData,
  SetRetireData,
  SetHomeData,
} from "../../Reducers/DataReducer";
import { getEmployee } from "../../Axios";
function SearchBox(props) {
  const { retire, enroll, SetEnrollData, SetRetireData, SetHomeData } = props;
  function SearchName(e) {
    const box = document.querySelector(".searchBox");
    console.log(`/employee/${box.value}`);
    getEmployee(`/employee/${box.value}`).then((res) => {
      console.log(res);
      retire
        ? SetRetireData({ res: res.data.data })
        : enroll
        ? SetEnrollData({ res: res.data.data })
        : SetHomeData({ res: res.data.data });
    });
    box.value = "";
  }
  return (
    <>
      <span>이름: </span>
      <input type="text" className="searchBox" />
      <button onClick={SearchName}>검색</button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    retire: state.Home.retire,
    enroll: state.Home.enroll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetHomeData: ({ res }) => dispatch(SetHomeData({ res })),
    SetRetireData: ({ res }) => dispatch(SetRetireData({ res })),
    SetEnrollData: ({ res }) => dispatch(SetEnrollData({ res })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
