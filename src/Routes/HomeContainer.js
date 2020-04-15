import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OpenInsult } from "../Reducers/HomeReducer";
import { SetHomeData } from "../Reducers/DataReducer";
import HomePresenter from "./HomePresenter";
import { getEmployee } from "../Axios";
function Home({ isAdmin, insult, modify, selected, OpenInsult, SetHomeData }) {
  function handleInsult(e) {
    OpenInsult({ insult });
  }
  const state = {
    isAdmin: isAdmin,
    modify: modify,
    insult: insult,
    selected: selected,
    handleInsult: handleInsult,
  };
  useEffect(() => {
    function getData() {
      const url = "/employee";
      getEmployee(url).then((res) => {
        console.log(res);
        SetHomeData({ data: res.data.data });
      });
    }
    return getData();
  });

  return <HomePresenter state={state} />;
}

function mapStateToProps(state) {
  return {
    insult: state.Home.insult,
    modify: state.Home.modify,
    selected: state.Home.selected,
    isAdmin: state.Sign.isAdmin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenInsult: ({ insult }) => dispatch(OpenInsult({ insult })),
    SetHomeData: ({ data }) => dispatch(SetHomeData({ data })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
