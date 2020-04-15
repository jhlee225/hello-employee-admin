import React from "react";
import { connect } from "react-redux";
import { OpenModify } from "../../Reducers/HomeReducer";
import { SetModifyData } from "../../Reducers/DataReducer";
import { putEmployee } from "../../Axios";
import EmModifyPresenter from "./EmModifyPresenter";
function EmInsult(props) {
  const { ModifyData, modify, OpenModify, SetModifyData } = props;
  function handleModify(e) {
    OpenModify({ modify });
  }

  function handleModifyData(e) {
    let data = ModifyData;
    const dataForm = document.querySelectorAll(".data");
    dataForm.forEach((ele) => {
      data = { ...data, [ele.id]: ele.value };
    });
    SetModifyData({ data });
  }

  function submitModify(e) {
    console.log(JSON.stringify(ModifyData));

    putEmployee("/employee", JSON.stringify(ModifyData)).then((res) =>
      alert("직원수정 완료!", res)
    );
  }

  const state = { ModifyData, handleModify, handleModifyData, submitModify };
  return <EmModifyPresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    modify: state.Home.modify,
    ModifyData: state.Data.Modify,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenModify: ({ modify }) => dispatch(OpenModify({ modify })),
    SetModifyData: ({ data }) => dispatch(SetModifyData({ data })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmInsult);
