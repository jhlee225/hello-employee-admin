import React from "react";
function EmListPresenter(props) {
  console.log(props.state);
  return (
    <div>
      <input type="checkbox" />
      <span>{props.state.emName}</span>
    </div>
  );
}
export default EmListPresenter;
