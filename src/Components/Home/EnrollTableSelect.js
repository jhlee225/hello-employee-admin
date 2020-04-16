import React from "react";
import { connect } from "react-redux";
import { SetEnrollData } from "../../Reducers/DataReducer";
import { OpenModal } from "../../Reducers/HomeReducer";
import { putEmployee, postEmployee } from "../../Axios";
const axios = require("axios");
function EnrollTablePresenter(props) {
  function GetPrint(e) {
    alert("지문 등록 시작");
    console.log(JSON.stringify(props.item));
    putEmployee("/employee/finger", JSON.stringify(props.item)).then((res) => {
      console.log(res);
      alert("지문을 확인합니다 지문을 한번더 입력해 주세요");
      axios.post("/commute").then((result) => {
        alert("지문이 입력되었습니다.");
        console.log(result);
        //       result ? ...
      });
      //등록실패는 없음.
      //등록성공시 출근하기를 API를호출해서 등록된 지문 확인
      //출근성공 ? 등록성공 : 출근성공 ? 등록성공 : 재등록? 업데이트 : END
      // 모달 ...
    });
  }

  return (
    <tr>
      <td>{props.item.emId}</td>
      <td>{props.item.emName}</td>
      <td>{props.item.emTeam}</td>
      <td>{props.item.emPosition}</td>
      <td>{props.item.emFingerPrint === 0 ? "X" : "O"}</td>
      <td value={props.item.emId} onClick={GetPrint}>
        {props.item.emFingerPrint === 0 ? "등록" : "재등록"}
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
