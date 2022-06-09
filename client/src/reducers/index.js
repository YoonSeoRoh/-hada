import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./theme";
import todoSlice from "./todo";
import weatherSlice from "./weather";

const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
  todo: todoSlice.reducer,
  theme: themeSlice.reducer,
});

export default rootReducer;
