import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        <SoundBar />
        {/* For framer-motion animation on page change! */}
        <AnimatePresence mode="wait">
          <Outlet location={location} key={location.pathname} />{" "}
          {/* This renders Main, AboutPage, etc. */}
        </AnimatePresence>
      </>
    </ThemeProvider>
  );
}

export default App;
