import React, { useEffect, useState, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { darkTheme, lightTheme } from "./components/Themes";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import Loading from "./subComponents/LoadingComponent";

function App() {
  const location = useLocation();
  const [isLoading, setLoading] = useState(true);
  const [themeMode, setThemeMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e) => {
      setThemeMode(e.matches ? "dark" : "light");
    };

    prefersDark.addEventListener("change", handleThemeChange);
    return () => prefersDark.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <SoundBar />

        {isLoading ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            <AnimatePresence mode="wait">
              <Outlet location={location} key={location.pathname} />
            </AnimatePresence>
          </Suspense>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
