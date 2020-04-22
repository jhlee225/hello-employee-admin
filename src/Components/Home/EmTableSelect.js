import React from "react";
import { connect } from "react-redux";
import { putEmployee } from "../../Axios";
import { SetRetireData } from "../../Reducers/DataReducer";
function EmSelectPresenter(props) {
  function SubmitStatus(e) {
    const newData = {
      emId: props.item.emId,
      emPosition: props.item.emPosition,
      emName: props.item.emName,
      emTeam: props.item.emTeam,
      emSecurityNum: props.item.emSecurityNum,
      emOpenTime: props.item.emOpenTime,
      emCloseTime: props.item.emCloseTime,
      emStartDate: props.item.emStartDate,
      emEndDate: props.item.emEndDate,
      emStatus: props.item.emStatus === "2" ? "1" : "2",
      emPhone: props.item.emPhone,
      emFingerPrint: props.item.emFingerPrint,
    };
    console.log(JSON.stringify(newData));
    putEmployee("/employee", JSON.stringify(newData)).then((res) =>
      alert("퇴직처리 완료!", res)
    );
  }

  return (
    <tr>
      <td>{props.item.emId}</td>
      <td>{props.item.emName}</td>
      <td>{props.item.emTeam}</td>
      <td>{props.item.emPosition}</td>
      <td>
        {props.item.emStatus === 0
          ? "휴가"
          : props.item.emStatus === 1
          ? "재직중"
          : "퇴직"}
      </td>
      <td onClick={SubmitStatus}>
        {props.item.emStatus === 2 ? "퇴직취소" : "퇴직"}
      </td>
    </tr>
  );
}
function mapStateToProps(state) {
  return {
    RetireData: state.Data.Enroll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetRetireData: ({ data }) => dispatch(SetRetireData({ data })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmSelectPresenter);
