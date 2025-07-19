import React, { useEffect, useState, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import Loading from "./subComponents/LoadingComponent";

function App() {
  const location = useLocation();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const nonScrollablePages = ["/", "/about"];
    const isNonScrollable = nonScrollablePages.includes(currentPath);
    document.body.style.overflowY = isNonScrollable ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [location.pathname]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={lightTheme}>
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
