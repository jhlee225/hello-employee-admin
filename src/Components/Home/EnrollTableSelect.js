import React from "react";
import { connect } from "react-redux";
import { SetEnrollData } from "../../Reducers/DataReducer";
import { OpenModal } from "../../Reducers/HomeReducer";
import { putEmployee } from "../../Axios";
function EnrollTablePresenter(props) {
  function GetPrint(e) {
    console.log(JSON.stringify(props.item));
    putEmployee("/employee/finger", JSON.stringify(props.item)).then((res) => {
      console.log(res);
    });
  }

  return (
    <tr>
      <td>{props.item.emId}</td>
      <td>{props.item.emName}</td>
      <td>{props.item.emTeam}</td>
      <td>{props.item.emPosition}</td>
      <td>{props.item.emFingerPrint === null ? "X" : "O"}</td>
      <td value={props.item.emId} onClick={GetPrint}>
        {props.item.emFingerPrint === null ? "등록" : "재등록"}
      </td>
    </tr>
  );
}
function mapStateToProps(state) {
  return {
    EnrollData: state.Data.Enroll,
    modal: state.Home.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetEnrollData: ({ data }) => dispatch(SetEnrollData({ data })),
    OpenModal: ({ modal }) => dispatch(OpenModal({ modal })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnrollTablePresenter);
