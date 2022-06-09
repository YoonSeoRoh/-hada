import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    //내부 action 및 동기 action
    addPost: (state, action) => {
      const nextId =
        state.post.length !== 0
          ? Math.max(...state.post.map((item) => item.id)) + 1
          : 0;
      state.post.push({
        id: nextId,
        title: action.payload.title,
        content: action.payload.content,
        emotion: action.payload.emotion,
        time: new Date().getTime(),
      });
      console.log(state.post[0]);
    },
    removePost: (state, action) => {
      return state.post.filter((item) => item.id !== action.payload);
    },
    removeAllPost: (state, action) => {
      return (state.post = []);
    },
  },
  extraReducers: {},
});

export const { addPost, removePost, removeAllPost } = postSlice.actions;
export default postSlice;
