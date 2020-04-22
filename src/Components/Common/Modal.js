import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";
import { OpenModal } from "../../Reducers/HomeReducer";
function Modal(props) {
  const { modal, OpenModal } = props;
  console.log(modal);
  return createPortal(
    <div className="loadingModal">
      <div onClick={() => OpenModal({ modal: modal })}>모달 닫기</div>
      <div className="loading"></div>
    </div>,
    document.getElementById("modal")
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
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
