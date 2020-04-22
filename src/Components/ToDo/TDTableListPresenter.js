import React from "react";
function TDListPresenter(props) {
  const { handleClick } = props.state;
  return (
    <tr className="hours">
      <td>직원이름</td>
      <td onClick={handleClick}></td>
      <td onClick={handleClick}></td>
      <td onClick={handleClick}></td>
      <td onClick={handleClick}></td>
      <td onClick={handleClick}></td>
    </tr>
  );
}
export default TDListPresenter;
