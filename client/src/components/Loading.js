import styled from "styled-components";

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
  font-size: 15px;
  text-align: center;
`;

export default function Loading() {
  return (
    <Background>
      <LoadingText>Loading</LoadingText>
    </Background>
  );
}
