import React from "react";
function EmListPresenter(props) {
  return (
    <tr>
      <td>{props.item.emName}</td>
      <td>{props.item.checkIn}</td>
      <td>{props.item.checkOut}</td>
    </tr>
  );
}
export default EmListPresenter;
