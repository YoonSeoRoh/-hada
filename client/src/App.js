import "./App.css";
import Main from "./pages/Main";
import Dairy from "./pages/Dairy";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  :root{
    --dark-bg: #292929;
    --light-bg: #4FEED3;
    --white: #FFFFFF;
    --black: #000000;
    --gray: #808080;
  }
`;

const Container = styled.section`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
`;

function App() {
  const theme = useSelector((state) => state.theme.darkThemeEnabled);
  return (
    <Container backgroundColor={theme ? "var(--dark-bg)" : "var(--light-bg)"}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dairy" element={<Dairy />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
