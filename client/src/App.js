import "./App.css";
import Main from "./pages/Main";
import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --dark-bg: #292929;
    --light-bg: #4FEED3;
    --white: #FFFFFF;
    --black: #000000;
    --gray: #808080;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
