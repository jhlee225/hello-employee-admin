import React from "react";
import { connect } from "react-redux";
import { OpenModal } from "../../Reducers/HomeReducer";
import { putEmployee } from "../../Axios";
const axios = require("axios");

function EnrollTablePresenter(props) {
  const { modal, OpenModal } = props;
  function GetPrint(e) {
    alert("지문 등록 시작");
    OpenModal({ modal: modal });
    console.log(JSON.stringify(props.item));
    putEmployee("/employee/finger", JSON.stringify(props.item)).then((res) => {
      console.log(res);

      alert("지문을 확인합니다 지문을 한번더 입력해 주세요");
      axios.put("/finger/verify").then((result) => {
        result.data
          ? alert("지문이 입력되었습니다.")
          : alert("잘못된 지문이 들어갔습니다! 재등록을 해주시길 바랍니다.");

        console.log(result);
        OpenModal({ modal: modal });
      });
    });
  }

  return (
    <tr>
      <td>{props.item.emId}</td>
      <td>{props.item.emName}</td>
      <td>{props.item.emTeam}</td>
      <td>{props.item.emPosition}</td>
      <td>{props.item.emFingerPrint === 0 ? "미보유" : "보유중"}</td>
      <td value={props.item.emId} onClick={GetPrint}>
        {props.item.emFingerPrint === 0 ? "등록" : "재등록"}
      </td>
    </tr>
  );
}
function mapStateToProps(state) {
  return {
    modal: state.Home.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenModal: ({ modal }) => dispatch(OpenModal({ modal })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnrollTablePresenter);
