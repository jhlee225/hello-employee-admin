import React from "react";
function EmListPresenter(props) {
  const { handleClick } = props.state;
  return (
    <tr>
      <td>
        <span>{props.item.emId}</span>
      </td>
      <td>
        <span>{props.item.emName}</span>
      </td>
      <td>
        <span>{props.item.emTeam}</span>
      </td>
      <td>
        <span>{props.item.emPosition}</span>
      </td>
      <td>
        <span>{props.item.emStatus}</span>
      </td>
      <td>
        <button value={props.item.emId} onClick={handleClick}>
          수정
        </button>
      </td>
    </tr>
  );
}
export default EmListPresenter;
