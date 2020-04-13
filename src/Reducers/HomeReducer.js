import { createReducer, createAction } from "@reduxjs/toolkit";

export const OpenInsult = createAction("OpenInsult");
export const OpenModify = createAction("OpenModify");
export const SetHomeData = createAction("SetHomeData");
export const SetModifyData = createAction("SetModifyData");
export const SetInsultData = createAction("SetInsultData");

export const actionsHome = {
  OpenInsult: OpenInsult,
  OpenModify: OpenModify,
  SetHomeData: SetHomeData,
  SetModifyData: SetModifyData,
  SetInsultData: SetInsultData,
};
export const HomeReducer = createReducer(
  {
    insult: false,
    modify: false,
    data: { Home: null, Insult: null, Modify: null },
  },
  {
    [OpenInsult]: (state, action) =>
      (state = action.payload.insult
        ? { ...state, insult: false }
        : { ...state, insult: true }),
    [OpenModify]: (state, action) =>
      (state = action.payload.modify
        ? { ...state, modify: false }
        : { ...state, modify: true }),
    [SetHomeData]: (state, action) =>
      (state = { ...state, data: { ...state.data, Home: action.payload.res } }),
    [SetInsultData]: (state, action) =>
      (state = {
        ...state,
        data: { ...state.data, Insult: action.payload.data },
      }),
    [SetModifyData]: (state, action) =>
      (state = {
        ...state,
        data: { ...state.data, Modify: action.payload.data },
      }),
  }
);
