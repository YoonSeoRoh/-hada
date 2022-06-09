import styled from "styled-components";
import DairyList from "../components/DairyList";
import WriteDairy from "../components/WriteDairy";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  width: ${(props) => props.width};
  height: 80vh;
  background-color: var(--white);
  margin: 20px;
  text-align: center;
`;

function Dairy() {
  return (
    <Container>
      <Block width="40%">
        <WriteDairy />
      </Block>
      <Block width="50%">
        <DairyList />
      </Block>
    </Container>
  );
}

export default Dairy;
