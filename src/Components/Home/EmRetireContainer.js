import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SetRetireData } from "../../Reducers/DataReducer";
import EmRetirePresenter from "./EmRetirePresenter";
import axios from "axios";

function EmRetire(props) {
  const { SetRetireData, RetireData, HomeData } = props;
  useEffect(() => {
    if (RetireData === null) SetRetireData({ data: HomeData });
    return () => SetRetireData({ data: null });
  }, []);

  function RetireSubmit(e) {
    const checkboxes = document.querySelectorAll(".check");
    let data = [];
    checkboxes.forEach((ele) => {
      if (ele.checked) data.push(HomeData[ele.value]);
    });
    console.log(JSON.stringify(RetireData));
    axios
      .put("/employee", JSON.stringify(RetireData))
      .then((res) => alert("퇴직처리 완료!", res));
  }

  const state = { RetireData, RetireSubmit };
  return <EmRetirePresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    HomeData: state.Data.Home,
    RetireData: state.Data.Retire,
  };
}

function mapDispatchToProps(dispatch) {
  return { SetRetireData: ({ data }) => dispatch(SetRetireData({ data })) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmRetire);
