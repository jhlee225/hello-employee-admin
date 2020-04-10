import React from "react";
function EmListPresenter(props) {
  const { handleClick } = props.state;

  return (
    <tr>
      <td>{props.item.emId}</td>
      <td>{props.item.emName}</td>
      <td>{props.item.emTeam}</td>
      <td>{props.item.emPosition}</td>
      <td>{props.item.emStatus}</td>
      <td>
        <button onClick={handleClick}>수정</button>
        <button>자세히</button>
      </td>
    </tr>
  );
}
export default EmListPresenter;
