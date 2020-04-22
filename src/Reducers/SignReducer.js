import { createReducer, createAction } from "@reduxjs/toolkit";

export const SetisIn = createAction("SetisIn");
export const SetisAdmin = createAction("SetisAdmin");

export const actionsSign = {
  SetisIn: SetisIn,
  SetisAdmin: SetisAdmin,
};
export const SignReducer = createReducer(
  {
    isAdmin: true,
    isIn: true,
  },
  {
    [SetisIn]: (state, action) =>
      (state = action.payload.isIn
        ? { ...state, isIn: false }
        : { ...state, isIn: true }),
    [SetisAdmin]: (state, action) =>
      (state = action.payload.isAdmin
        ? { ...state, isAdmin: false }
        : { ...state, isAdmin: true }),
  }
);
