import { createReducer, createAction } from "@reduxjs/toolkit";

export const OpenHome = createAction("OpenHome");
export const OpenInsult = createAction("OpenInsult");
export const OpenModify = createAction("OpenModify");
export const OpenModal = createAction("OpenModal");
export const OpenRetire = createAction("OpenRetire");
export const OpenEnroll = createAction("OpenEnroll");

export const actionsHome = {
  OpenHome: OpenHome,
  OpenInsult: OpenInsult,
  OpenModify: OpenModify,
  OpenRetire: OpenRetire,
  OpenEnroll: OpenEnroll,
  OpenModal: OpenModal,
};
export const HomeReducer = createReducer(
  {
    insult: false,
    modify: false,
    retire: false,
    enroll: false,
    modal: false,
  },
  {
    [OpenHome]: (state, action) =>
      (state = {
        insult: false,
        modal: false,
        modify: false,
        retire: false,
        enroll: false,
      }),
    [OpenInsult]: (state, action) =>
      (state = {
        insult: true,
        modify: false,
        modal: false,
        retire: false,
        enroll: false,
      }),
    [OpenModify]: (state, action) =>
      (state = action.payload.modify
        ? { ...state, modify: false }
        : { ...state, modify: true }),
    [OpenRetire]: (state, action) =>
      (state = {
        insult: false,
        modify: false,
        modal: false,
        retire: true,
        enroll: false,
      }),
    [OpenEnroll]: (state, action) =>
      (state = {
        insult: false,
        modify: false,
        modal: false,
        retire: false,
        enroll: true,
      }),
    [OpenModal]: (state, action) =>
      (state = action.payload.modal
        ? { ...state, modal: false }
        : { ...state, modal: true }),
  }
);
