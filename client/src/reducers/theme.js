import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkThemeEnabled: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    //내부 action 및 동기 action
    switchTheme: (state, action) => {
      return {
        ...state,
        darkThemeEnabled: !state.darkThemeEnabled,
      };
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice;
