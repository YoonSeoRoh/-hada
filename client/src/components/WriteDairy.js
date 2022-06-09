import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../reducers/post";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  input {
    margin: 10px;
    width: 80%;
    height: 20px;
    border: none;
    border-bottom: 1px solid var(--gray);
    :focus {
      outline: none;
    }
  }
  textarea {
    margin: 10px;
    width: 80%;
    height: 30vh;
    border: 1px solid var(--gray);
    resize: none;
    :focus {
      outline: none;
    }
  }
  select {
    margin: 10px;
    width: 80%;
    :focus {
      outline: none;
    }
  }
`;

const StoreBtn = styled.button`
  width: 80%;
  height: 30px;
  background-color: var(--gray);
  border: none;
  cursor: pointer;
`;

function WriteDairy() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    content: "",
    emotion: 1,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(state));
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };
  return (
    <div>
      <h1>Today's Dairy</h1>
      <StyledForm onSubmit={handleSubmit}>
        <input
          placeholder="title"
          value={state.title}
          onChange={handleChange}
        />
        <textarea value={state.content} onChange={handleChange} />
        <select value={state.emotion} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <StoreBtn type="submit">STORE</StoreBtn>
      </StyledForm>
    </div>
  );
}

export default WriteDairy;
