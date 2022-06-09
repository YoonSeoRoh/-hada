import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAllTodo } from "../reducers/todo";
import Todo from "./Todo";

const FormBlock = styled.div`
  margin: 10px;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1.5px solid;
  margin: 10px;
  :focus {
    outline: none;
  }
`;

const RemoveAllBtn = styled.button`
  margin: 10px;
  margin-top: 15px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--gray);
  font-weight: 600;
`;

const AddBtn = styled.button`
  background-color: var(--gray);
  border: none;
  border-radius: 5px;
  width: 65px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
  font-weight: 600;
`;

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
  const removeAll = () => {
    dispatch(removeAllTodo());
    console.log(todo);
  };
  return (
    <FormBlock>
      <form onSubmit={handleSubmit}>
        <StyledInput type="text" value={todo} onChange={handleChange} />
        <AddBtn type="submit">ADD</AddBtn>
      </form>
      {todoList.length !== 0
        ? todoList.map((todo) => (
            <Todo key={todo.id} id={todo.id} text={todo.text} />
          ))
        : `투두리스트를 작성해보세요`}
      {todoList.length !== 0 && (
        <RemoveAllBtn onClick={removeAll}>REMOVE ALL</RemoveAllBtn>
      )}
    </FormBlock>
  );
}

export default TodoList;
