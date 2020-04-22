import React from "react";
import { connect } from "react-redux";
import { SetTodoModify } from "../../Reducers/ToDoReducer";
import { SetModifyData } from "../../Reducers/DataReducer";
import { putEmployee } from "../../Axios";
import TDModifyPresenter from "./TDModifyPresenter";
function EmInsult(props) {
  const { ModifyData, modify, SetTodoModify, SetModifyData } = props;

  function handleModify(e) {
    SetTodoModify({ modify });
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
      alert("일정 수정 완료!", res)
    );
  }

  const state = { ModifyData, handleModify, handleModifyData, submitModify };
  return <TDModifyPresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    modify: state.ToDo.modify,
    ModifyData: state.Data.Modify,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetTodoModify: ({ modify }) => dispatch(SetTodoModify({ modify })),
    SetModifyData: ({ data }) => dispatch(SetModifyData({ data })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmInsult);
