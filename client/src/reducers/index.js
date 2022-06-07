import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todo";
import weatherSlice from "./weather";

const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
  todo: todoSlice.reducer,
});

export default rootReducer;
