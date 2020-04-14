import React from "react";
import { connect } from "react-redux";
import { SetInsultData } from "../../Reducers/DataReducer";
import EmInsultPresenter from "./EmInsultPresenter";
import axios from "axios";

function EmInsult({ InsultData, SetInsultData }) {
  const state = {
    handleInsultData: handleInsultData,
    InsultSubmit: InsultSubmit,
  };

  function handleInsultData(e) {
    let data = { emId: 0 };
    const dataForm = document.querySelectorAll(".data");
    dataForm.forEach((ele) => {
      data = { ...data, [ele.id]: ele.value };
    });
    SetInsultData({ data });
  }

  function InsultSubmit(e) {
    console.log(JSON.stringify(InsultData));
    axios
      .put("/employee", JSON.stringify(InsultData))
      .then((res) => console.log(res))
      .then((res) => alert("직원 추가 완료!"));
  }

  return (
    <>
      <EmInsultPresenter state={state} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    InsultData: state.Data.Insult,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetInsultData: ({ data }) => dispatch(SetInsultData({ data })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EmInsult);
