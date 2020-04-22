import React from "react";
import { connect } from "react-redux";
import { SetDay } from "../../Reducers/ToDoReducer";
//import TDTableList from "./TDTableListContainer";

function EmTable(props) {
  const { today, data } = props;

  return (
    <>
      <select>
        <option>직원선택</option>
        {data === null || data === undefined ? (
          <></>
        ) : (
          data.map((item, key) => (
            <option key={key} id={key}>
              {item.emName}
            </option>
          ))
        )}
      </select>
      <input type="date" defaultValue={today} />
      <div>
        {/*data === null || data === undefined ? (
        <></>
      ) : (
        data.map((item, key) => <TDTableList key={key} item={item} />)
      )*/}
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return {
    data: state.Data.Todo,
    month: state.ToDo.today.month,
    today: state.ToDo.today,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    SetDay: ({ day }) => dispatch(SetDay({ day })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EmTable);
