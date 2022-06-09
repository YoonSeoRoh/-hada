import { combineReducers } from "@reduxjs/toolkit";
import postSlice from "./post";
import themeSlice from "./theme";
import todoSlice from "./todo";
import weatherSlice from "./weather";

const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
  todo: todoSlice.reducer,
  theme: themeSlice.reducer,
  post: postSlice.reducer,
});

export default rootReducer;
