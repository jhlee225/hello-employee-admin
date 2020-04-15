import React from "react";
function EmSelectPresenter(props) {
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
        <input type="checkbox" className="check" />
      </td>
    </tr>
  );
}
export default EmSelectPresenter;
