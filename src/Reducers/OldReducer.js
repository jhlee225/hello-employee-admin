import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    Home: {
      insult: false,
      modify: false,
    },
    Sign: { isIn: true },
    data: {
      Home: { Table: null, Modify: null, Insult: null },
      Sign: { In: null, Up: null },
      ToDo: null,
    },
  },
  reducers: {
    SelectEmployee: (state, action) =>
      (state.selected = action.payload.selected),
    SetisIn: (state, action) =>
      action.payload.isIn
        ? (state.Sign.isIn = false)
        : (state.Sign.isIn = true),
    SetHomeData: (state, action) => (state.data.Home.Table = action.payload),
    GetModifyData: (state, action) =>
      (state.data.Home.Modify = state.data.Home.Table[action.payload.selected]),
    SetModifyData: (state, action) =>
      (state.data.Home.Modify[1] = action.payload.data),
    SetSignUpData: (state, action) =>
      (state.data.Sign = { In: null, Up: action.payload.data }),
    SetSignInData: (state, action) =>
      (state.data.Sign = { In: action.payload.data, Up: null }),
  },
});
