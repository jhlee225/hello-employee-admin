import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: { insult: false, modify: false, selected: 0, data: [] },
  reducers: {
    OpenInsult: (state, action) =>
      (state = action.payload.insult
        ? (state = {
            ...state,
            insult: false,
          })
        : (state = {
            ...state,
            insult: true,
          })),
    OpenModify: (state, action) =>
      (state = action.payload.modify
        ? (state = {
            ...state,
            modify: false,
          })
        : (state = {
            ...state,
            modify: true,
          })),
    SelectEmployee: (state, action) =>
      (state = { ...state, selected: action.payload.selected }),
    SetData: (state, action) =>
      (state = { ...state, data: action.payload.res }),
  },
});
