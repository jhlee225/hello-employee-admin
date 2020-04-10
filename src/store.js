import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./reducer";
export const {
  OpenInsult,
  OpenModify,
  SelectEmployee,
  SetData,
} = employeeSlice.actions;

const store = configureStore({
  reducer: employeeSlice.reducer,
});
export default store;
