import React from "react";
import { connect } from "react-redux";
import { SetInsultData } from "../../Reducers/DataReducer";
import { postEmployee } from "../../Axios";
import EmInsultPresenter from "./TDInsultPresenter";

function EmInsult({ InsultData, SetInsultData, TodoData }) {
  const state = {
    data: TodoData,
    handleInsultData: handleInsultData,
    InsultSubmit: InsultSubmit,
  };

  function handleInsultData(e) {
    let data = { emId: 0 };
    const dataForm = document.querySelectorAll(".data");
    console.log(dataForm);
    dataForm.forEach((ele) => {
      data = { ...data, [ele.id]: ele.value };
    });
    SetInsultData({ data });
  }

  function InsultSubmit(e) {
    console.log(JSON.stringify(InsultData));
    postEmployee("/employee", JSON.stringify(InsultData)).then((res) => {
      console.log(res);
      alert("일정 추가 완료!");
    });
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
    TodoData: state.Data.Todo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetInsultData: ({ data }) => dispatch(SetInsultData({ data })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EmInsult);
