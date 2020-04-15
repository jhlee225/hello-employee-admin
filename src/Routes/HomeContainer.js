import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OpenInsult } from "../Reducers/HomeReducer";
import {
  SetHomeData,
  SetEnrollData,
  SetRetireData,
} from "../Reducers/DataReducer";
import HomePresenter from "./HomePresenter";
import { getEmployee } from "../Axios.js";
function Home(props) {
  const { selected, isAdmin, insult, modify } = props;
  const { OpenInsult, SetHomeData, SetEnrollData, SetRetireData } = props;
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
        SetRetireData({ data: res.data.data });
        SetEnrollData({ data: res.data.data });
      });
    }
    getData();
    return () => {
      SetHomeData({ data: null });
      SetRetireData({ data: null });
      SetEnrollData({ data: null });
    };
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
    SetEnrollData: ({ data }) => dispatch(SetEnrollData({ data })),
    SetRetireData: ({ data }) => dispatch(SetRetireData({ data })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
