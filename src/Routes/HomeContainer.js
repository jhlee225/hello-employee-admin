import React, { useEffect } from "react";
import { connect } from "react-redux";
import { OpenInsult, SetData } from "../store";
import HomePresenter from "./HomePresenter";
const axios = require("axios");
function Home({ insult, modify, selected, OpenInsult, SetData }) {
  function handleInsult(e) {
    OpenInsult({ insult });
  }

  const state = {
    modify: modify,
    insult: insult,
    selected: selected,
    handleInsult: handleInsult,
  };
  useEffect(() => {
    function getData() {
      axios
        .post("/employeeSelectAll")
        .then((response) => response.data.list)
        .then((res) => SetData({ res }));
    }
    return getData();
  });

  return <HomePresenter state={state} />;
}

function mapStateToProps(state) {
  return {
    insult: state.insult,
    modify: state.modify,
    selected: state.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OpenInsult: ({ insult }) => dispatch(OpenInsult({ insult })),
    SetData: ({ res }) => dispatch(SetData({ res })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
