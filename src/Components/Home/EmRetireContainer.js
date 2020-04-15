import React from "react";
import { connect } from "react-redux";
import { SetRetireData } from "../../Reducers/DataReducer";
import { putEmployee } from "../../Axios";
import EmRetirePresenter from "./EmRetirePresenter";
function EmRetire(props) {
  const { RetireData } = props;

  function RetireSubmit(e) {
    const checkboxes = document.getElementsByClassName("check");
    let data = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        console.log(checkboxes[i]);
        data.push(RetireData[i]);
      }
    }
    console.log(data);
    data.forEach((ele) => {
      console.log(JSON.stringify(ele));

      putEmployee("/employee", JSON.stringify(ele)).then((res) =>
        alert("퇴직처리 완료!", res)
      );
    });
  }

  const state = { RetireData, RetireSubmit };
  return <EmRetirePresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    RetireData: state.Data.Retire,
  };
}

function mapDispatchToProps(dispatch) {
  return { SetRetireData: ({ data }) => dispatch(SetRetireData({ data })) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmRetire);
