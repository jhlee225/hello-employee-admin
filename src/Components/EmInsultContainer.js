import React from "react";
import { connect } from "react-redux";
import { OpenInsult } from "../store";
import EmInsultPresenter from "./EmInsultPresenter";
function EmInsult({ insult, OpenInsult }) {
  function InsultSubmit(e) {
    const dataForm = document.querySelectorAll(".data");

    let newData = {
      emPosition: dataForm[5].value,
      emName: dataForm[0].value,
      emTeam: dataForm[4].value,
      emSecurityNum: dataForm[1].value + "-" + dataForm[2].value,
      emOpenTime: dataForm[8].value,
      emCloseTime: dataForm[9].value,
      emStartDate: dataForm[6].value,
      emEndDate: dataForm[7].value,
      emStatus: dataForm[10].value,
      emPhone: dataForm[3].value,
    };
    console.log(newData);
  }
  function handleInsult(e) {
    OpenInsult({ insult });
  }
  const state = { InsultSubmit: InsultSubmit, handleInsult: handleInsult };
  return (
    <>
      <EmInsultPresenter state={state} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    insult: state.insult,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenInsult: ({ insult }) => dispatch(OpenInsult({ insult })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EmInsult);
