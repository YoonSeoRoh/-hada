import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../reducers/todo";

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    text-align: left;
    margin: 5px;
  }
`;

function Todo({ id, text }) {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleTodo(id));
  };
  const remove = () => {
    dispatch(removeTodo(id));
  };
  return (
    <TodoItem key={id}>
      <span>{text}</span>
      <div>
        <FontAwesomeIcon
          icon={faCheck}
          onClick={toggle}
          style={{ height: "21px", cursor: "pointer", margin: "5px" }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={remove}
          style={{ height: "21px", cursor: "pointer", margin: "5px" }}
        />
      </div>
    </TodoItem>
  );
}
export default Todo;
