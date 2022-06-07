import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    //내부 action 및 동기 action
    addTodo: (state, action) => {
      const nextId =
        state.length !== 0 ? Math.max(...state.map((todo) => todo.id)) + 1 : 0;
      state.push({ id: nextId, text: action.payload, done: false });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: {},
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice;
