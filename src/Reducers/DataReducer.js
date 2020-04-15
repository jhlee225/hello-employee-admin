import { createReducer, createAction } from "@reduxjs/toolkit";

export const SetHomeData = createAction("SetHomeData");
export const SetModifyData = createAction("SetModifyData");
export const SetInsultData = createAction("SetInsultData");
export const SetRetireData = createAction("SetRetireData");
export const SetSignInData = createAction("SetSignInData");
export const SetSignUpData = createAction("SetSignUpData");
export const SetEnrollData = createAction("SetEnrollData");
export const actionsData = {
  SetSignInData: SetSignInData,
  SetSignUpData: SetSignUpData,
  SetHomeData: SetHomeData,
  SetModifyData: SetModifyData,
  SetInsultData: SetInsultData,
  SetRetireData: SetRetireData,
  SetEnrollData: SetEnrollData,
};
export const DataReducer = createReducer(
  {
    Home: null,
    Todo: null,
    Sign: null,
    Insult: null,
    Modify: null,
    Retire: null,
    Enroll: null,
  },
  {
    [SetSignInData]: (state, action) =>
      (state = { ...state, Sign: { Up: null, In: action.payload.data } }),
    [SetSignUpData]: (state, action) =>
      (state = { ...state, Sign: { In: null, Up: action.payload.data } }),
    [SetHomeData]: (state, action) =>
      (state = { ...state, Home: action.payload.data }),
    [SetInsultData]: (state, action) =>
      (state = {
        ...state,
        Insult: action.payload.data,
      }),
    [SetModifyData]: (state, action) =>
      (state = {
        ...state,
        Modify: action.payload.data,
      }),
    [SetRetireData]: (state, action) =>
      (state = {
        ...state,
        Retire: action.payload.data,
      }),
    [SetEnrollData]: (state, action) =>
      (state = {
        ...state,
        Enroll: action.payload.data,
      }),
  }
);
