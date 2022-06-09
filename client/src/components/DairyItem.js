import styled from "styled-components";

const DairyBlock = styled.div`
  text-align: left;
  padding: 10px;
`;

function DairyItem() {
  return (
    <DairyBlock>
      <p>2022-06-09</p>
      <h3>title</h3>
    </DairyBlock>
  );
}

export default DairyItem;
