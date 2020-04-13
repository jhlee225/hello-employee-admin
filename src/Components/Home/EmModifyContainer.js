import React from "react";
import { connect } from "react-redux";
import { OpenModify, SetModifyData } from "../../Reducers/HomeReducer";
import EmModifyPresenter from "./EmModifyPresenter";

function EmInsult({ ModifyData, modify, OpenModify, SetModifyData }) {
  const state = { ModifyData, handleModify, handleModifyData, submitModify };

  function handleModify(e) {
    OpenModify({ modify });
  }

  function handleModifyData(e) {
    let data = { emId: ModifyData.emId };
    const dataForm = document.querySelectorAll(".data");
    dataForm.forEach((ele) => {
      console.log(ele.id, ele.value);
      data = { ...data, [ele.id]: ele.value };
    });
    SetModifyData({ data });
  }

  function submitModify(e) {
    console.log(JSON.stringify(ModifyData));
  }

  return <EmModifyPresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    modify: state.Home.modify,
    ModifyData: state.Home.data.Modify,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenModify: ({ modify }) => dispatch(OpenModify({ modify })),
    SetModifyData: ({ data }) => dispatch(SetModifyData({ data })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmInsult);
