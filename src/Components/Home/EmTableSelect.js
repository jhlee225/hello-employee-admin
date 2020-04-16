import React from "react";
import { connect } from "react-redux";
import { SetRetireData } from "../../Reducers/DataReducer";
function EmSelectPresenter(props) {
  const { RetireData, SetRetireData } = props;
  function handleRetireData(e) {
    props.item.emStatus = e.target.checked ? 2 : 2;
    SetRetireData({ ...RetireData, [props.item.emId]: props.item });
  }

  return (
    <tr>
      <td>{props.item.emId}</td>
      <td>{props.item.emName}</td>
      <td>{props.item.emTeam}</td>
      <td>{props.item.emPosition}</td>
      <td>
        {props.item.emStatus === "0"
          ? "휴가"
          : props.item.emStatus === "1"
          ? "재직중"
          : "퇴직"}
      </td>
      <td>
        <input type="checkbox" onClick={handleRetireData} className="check" />
      </td>
    </tr>
  );
}
function mapStateToProps(state) {
  return {
    RetireData: state.Data.Enroll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SetRetireData: ({ data }) => dispatch(SetRetireData({ data })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmSelectPresenter);
