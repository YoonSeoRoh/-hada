import styled from "styled-components";
import Spinner from "../asset/spinner.gif";

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;

export default function Loading() {
  return (
    <Background>
      <LoadingText>LOADING</LoadingText>
      <img src={Spinner} alt="로딩중"></img>
    </Background>
  );
}
