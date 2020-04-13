import { combineReducers } from "redux";
import { HomeReducer } from "./HomeReducer";
import { SignReducer } from "./SignReducer";

export const rootReducer = combineReducers({
  Home: HomeReducer,
  Sign: SignReducer,
});
