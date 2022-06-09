import { useDispatch } from "react-redux";
import { switchTheme } from "../reducers/theme";
import styled from "styled-components";

const ModeBtn = styled.button`
  margin: 10px;
  margin-top: 15px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--gray);
  font-weight: 600;
`;

const DiaryBtn = styled.button`
  margin: 10px;
  margin-top: 15px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--gray);
  font-weight: 600;
`;

function Change() {
  const dispatch = useDispatch();
  return (
    <div>
      <ModeBtn
        onClick={() => {
          dispatch(switchTheme());
        }}
      >
        MODE
      </ModeBtn>
      <DiaryBtn>DAIRY</DiaryBtn>
    </div>
  );
}

export default Change;
