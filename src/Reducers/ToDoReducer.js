import { createReducer, createAction } from "@reduxjs/toolkit";

export const SetisIn = createAction("SetisIn");
export const SetToDoData = createAction("SetToDoData");

export const actionsToDo = {
  SetisIn: SetisIn,
  SetToDoData: SetToDoData,
};
export const ToDoReducer = createReducer(
  {
    isIn: true,
    data: [0, 0, 0],
  },
  {
    [SetisIn]: (state, action) =>
      (state = action.payload.isIn
        ? { ...state, isIn: false }
        : { ...state, isIn: true }),
    [SetToDoData]: (state, action) =>
      (state = { ...state, data: { Up: null, In: action.payload.data } }),
  }
);
