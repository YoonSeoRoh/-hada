import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../reducers/todo";
import Todo from "./Todo";

function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit">ADD</button>
      </form>
      {todoList.length !== 0
        ? todoList.map((todo) => <Todo key={todo.id} text={todo.text} />)
        : `Loading...`}
    </div>
  );
}

export default TodoList;
