import { createSlice } from "@reduxjs/toolkit";
import { getWeatherThunk } from "../actions/weather";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    //내부 action 및 동기 action
  },
  extraReducers: {
    //외부 action 및 비동기 action
    [getWeatherThunk.pending](state, action) {
      state.loading = true;
    },
    [getWeatherThunk.fulfilled](state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    [getWeatherThunk.rejected](state, action) {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default weatherSlice;
