import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../reducers/todo";

function Todo({ id, text }) {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleTodo(id));
  };
  const remove = () => {
    dispatch(removeTodo(id));
  };
  return (
    <div key={id}>
      <div>{text}</div>
      <button onClick={toggle}>V</button>
      <button onClick={remove}>X</button>
    </div>
  );
}
export default Todo;
