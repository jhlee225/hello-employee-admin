import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OpenInsult, OpenHome } from "../Reducers/HomeReducer";
import {
  SetHomeData,
  SetEnrollData,
  SetRetireData,
} from "../Reducers/DataReducer";
import HomePresenter from "./HomePresenter";
import { getEmployee } from "../Axios.js";
//import Axios from "axios";
import data from "../data";
function Home(props) {
  const { isload, selected, isAdmin, insult, modify, SetIsLoad } = props;
  const {
    OpenHome,
    OpenInsult,
    SetHomeData,
    SetEnrollData,
    SetRetireData,
  } = props;
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
        SetHomeData({ data: res.data.data });
        SetRetireData({ data: res.data.data });
        SetEnrollData({ data: res.data.data });
      });
      /*Axios.get(
        "http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=18869f4f01a37ac87f4c23f6fc1c6a21"
      ).then((res) => {
        SetHomeData({ data: res.data.list });
        SetRetireData({ data: res.data.list });
        SetEnrollData({ data: res.data.list });
      }); //*/
      SetHomeData({ data: JSON.parse(data).data });
      SetRetireData({ data: JSON.parse(data).data });
      SetEnrollData({ data: JSON.parse(data).data });
      //*/
    }

    getData();
    return () => {
      if (isload) {
        OpenHome();
        SetHomeData({ data: null });
        SetRetireData({ data: null });
        SetEnrollData({ data: null });
        SetIsLoad({ isload });
      }
    };
  });

  return <HomePresenter state={state} />;
}

function mapStateToProps(state) {
  return {
    isload: state.Home.isload,
    insult: state.Home.insult,
    modify: state.Home.modify,
    selected: state.Home.selected,
    isAdmin: state.Sign.isAdmin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenHome: () => dispatch(OpenHome()),
    OpenInsult: ({ insult }) => dispatch(OpenInsult({ insult })),
    SetIsLoad: ({ isload }) => dispatch(SetHomeData({ isload })),
    SetHomeData: ({ data }) => dispatch(SetHomeData({ data })),
    SetEnrollData: ({ data }) => dispatch(SetEnrollData({ data })),
    SetRetireData: ({ data }) => dispatch(SetRetireData({ data })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
