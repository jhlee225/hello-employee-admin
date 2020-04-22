import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OpenInsult } from "../Reducers/HomeReducer";
import { SetTodoData } from "../Reducers/DataReducer";
import LogPresenter from "./LogPresenter";
import { getEmployee } from "../Axios.js";
//import Axios from "axios";
function ToDo(props) {
  const { selected, isAdmin, insult, modify } = props;
  const { OpenInsult, SetTodoData } = props;
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
      const url = "/commute/log";
      getEmployee(url).then((res) => {
        SetTodoData({ data: res.data.data });
      });
      /*Axios.get(
        "http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=18869f4f01a37ac87f4c23f6fc1c6a21"
      ).then((res) => {
        SetTodoData({ data: res.data.list });
      });//*/
    }
    getData();
  });

  return <LogPresenter state={state} />;
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
    SetTodoData: ({ data }) => dispatch(SetTodoData({ data })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
