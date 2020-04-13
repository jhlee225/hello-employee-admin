import React from "react";
import EmListPresenter from "./EmListPresenter";
function EmListContainer(props) {
  return <EmListPresenter state={props.item} />;
}

export default EmListContainer;
