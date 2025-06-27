import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        <Outlet /> {/* This renders Main, AboutPage, etc. */}
      </>
    </ThemeProvider>
  );
}

export default App;
