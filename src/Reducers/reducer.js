import { combineReducers } from "redux";
import { HomeReducer } from "./HomeReducer";
import { SignReducer } from "./SignReducer";
import { ToDoReducer } from "./ToDoReducer";
import { DataReducer } from "./DataReducer";

export const rootReducer = combineReducers({
  Home: HomeReducer,
  Sign: SignReducer,
  Todo: ToDoReducer,
  Data: DataReducer,
});
