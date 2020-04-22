import React from "react";
function EmListPresenter(props) {
  const { handleClick } = props.state;
  return (
    <tr>
      <td>{props.item.emId}</td>
      <td>{props.item.emName}</td>
      <td>{props.item.emTeam}</td>
      <td>{props.item.emPosition}</td>
      <td>
        {props.item.emStatus === 0
          ? "휴가"
          : props.item.emStatus === 1
          ? "재직중"
          : "퇴직"}
      </td>
      <td value={props.item.emId} onClick={handleClick}>
        수정
      </td>
    </tr>
  );
}
export default EmListPresenter;
