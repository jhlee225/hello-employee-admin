import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OpenInsult, SetHomeData } from "../Reducers/HomeReducer";
import data from "../data";
import HomePresenter from "./HomePresenter";
//const axios = require("axios");
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
    function getData(data) {
      const newdata = Object.values(JSON.parse(data));
      console.log(newdata);
      /* 
      axios
        .post("/employeeSelectAll")
        .then((response) => JSON.parse(response))
        .then((res) => SetHomeData({ res }));
      //*/
      SetHomeData({ res: newdata });
    }
    return getData(data);
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
    SetHomeData: ({ res }) => dispatch(SetHomeData({ res })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
