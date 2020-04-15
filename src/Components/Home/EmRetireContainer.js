import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SetRetireData } from "../../Reducers/DataReducer";
import { getEmployee, putEmployee } from "../../Axios";
import EmRetirePresenter from "./EmRetirePresenter";
function EmRetire(props) {
  const { SetRetireData, RetireData, HomeData } = props;
  useEffect(() => {
    function getData() {
      const url = "/employee";
      getEmployee(url).then((res) => {
        console.log(res);
        SetRetireData({ data: res.data.data });
      });
    }
    getData();
  });

  function RetireSubmit(e) {
    const checkboxes = document.querySelectorAll(".check");
    let data = [];
    checkboxes.forEach((ele) => {
      if (ele.checked) data.push(HomeData[ele.value]);
    });
    console.log(JSON.stringify(RetireData));

    putEmployee("/employee", JSON.stringify(RetireData)).then((res) =>
      alert("퇴직처리 완료!", res)
    );
  }

  const state = { RetireData, RetireSubmit };
  return <EmRetirePresenter state={state} />;
}
function mapStateToProps(state) {
  return {
    HomeData: state.Data.Home,
    RetireData: state.Data.Retire,
  };
}

function mapDispatchToProps(dispatch) {
  return { SetRetireData: ({ data }) => dispatch(SetRetireData({ data })) };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmRetire);
