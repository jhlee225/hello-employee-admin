import { createReducer, createAction } from "@reduxjs/toolkit";

export const SetisIn = createAction("SetisIn");
export const SetisAdmin = createAction("SetisAdmin");
export const SetSignInData = createAction("SetSignInData");
export const SetSignUpData = createAction("SetSignUpData");

export const actionsSign = {
  SetisIn: SetisIn,
  SetisAdmin: SetisAdmin,
  SetSignInData: SetSignInData,
  SetSignUpData: SetSignUpData,
};
export const SignReducer = createReducer(
  {
    isAdmin: false,
    isIn: true,
    data: null,
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
    [SetSignInData]: (state, action) =>
      (state = { ...state, data: { Up: null, In: action.payload.data } }),
    [SetSignUpData]: (state, action) =>
      (state = { ...state, data: { In: null, Up: action.payload.data } }),
  }
);
