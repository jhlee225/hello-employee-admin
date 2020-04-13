import React from "react";
import { connect } from "react-redux";
import { OpenInsult, SetInsultData } from "../../Reducers/HomeReducer";
import EmInsultPresenter from "./EmInsultPresenter";
function EmInsult({ insult, OpenInsult, SetInsultData }) {
  const state = {
    handleInsultData: handleInsultData,
    InsultSubmit: InsultSubmit,
    handleInsult: handleInsult,
  };

  function handleInsult(e) {
    OpenInsult({ insult });
  }

  function handleInsultData(e) {
    let data = { emId: 0 };
    const dataForm = document.querySelectorAll(".data");
    dataForm.forEach((ele) => {
      console.log(ele.id, ele.value);
      data = { ...data, [ele.id]: ele.value };
    });
    SetInsultData({ data });
  }

  function InsultSubmit(e) {}

  return (
    <>
      <EmInsultPresenter state={state} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    insult: state.Home.insult,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenInsult: ({ insult }) => dispatch(OpenInsult({ insult })),
    SetInsultData: ({ data }) => dispatch(SetInsultData({ data })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EmInsult);
