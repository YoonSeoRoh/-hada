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
    toggleTodo: (state, action) => {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo;
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    removeAllTodo: (state, action) => {
      return (state = []);
    },
  },
  extraReducers: {},
});

export const { addTodo, toggleTodo, removeTodo, removeAllTodo } =
  todoSlice.actions;
export default todoSlice;
