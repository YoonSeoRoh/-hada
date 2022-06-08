import "./App.css";
import { createGlobalStyle } from "styled-components";
import Main from "./pages/Main";

const GlobalStyles = createGlobalStyle`
  :root{
    --purple: #4948FD;
    --orange: #FFAE47;
    --white: #FFFFFF;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Main />
    </div>
  );
}

export default App;
