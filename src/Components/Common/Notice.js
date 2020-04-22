import React from "react";
import { connect } from "react-redux";
import { SetisAdmin } from "../../Reducers/SignReducer";
function Notice({ isAdmin, SetisAdmin }) {
  function HandleLogout(e) {
    SetisAdmin({ isAdmin });
  }
  return (
    <>
      <div className="notice">
        <p>
          관리자 모드에 접근하셨습니다. 관리자 권한이 없으실 경우 이용에 제한이
          있을 수 있습니다.
          <a onClick={HandleLogout} href="/employee_index">
            <span className="notice-btn">로그아웃</span>
          </a>
        </p>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return { isAdmin: state.Sign.isAdmin };
}
function mapDispatchToProps(dispatch) {
  return {
    SetisAdmin: ({ isAdmin }) => dispatch(SetisAdmin({ isAdmin })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Notice);
