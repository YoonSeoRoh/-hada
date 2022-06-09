import { useDispatch } from "react-redux";
import { switchTheme } from "../reducers/theme";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBtn = styled.button`
  margin: 10px;
  margin-top: 15px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--gray);
  font-weight: 600;
  cursor: pointer;
`;

function Change() {
  const dispatch = useDispatch();
  return (
    <div>
      <StyledBtn
        onClick={() => {
          dispatch(switchTheme());
        }}
      >
        MODE
      </StyledBtn>
      <Link to="/dairy">
        <StyledBtn>DAIRY</StyledBtn>
      </Link>
    </div>
  );
}

export default Change;
