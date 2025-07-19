import React, { useEffect, useState, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import Loading from "./subComponents/LoadingComponent";
import ScrollWrapper from "./subComponents/ScrollWrapper";

function App() {
  const location = useLocation();
  const [isLoading, setLoading] = useState(true);

  const scrollablePages = ["/myskills", "/work"];
  const isScrollable = scrollablePages.includes(
    location.pathname.toLowerCase()
  );

  //  useEffect(() => {
  //     // Show loading on initial load
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }, []);

  useEffect(() => {
    // Trigger loading on initial load and route change
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
            <ScrollWrapper scrollable={isScrollable}>
              <AnimatePresence mode="wait">
                <Outlet location={location} key={location.pathname} />
              </AnimatePresence>
            </ScrollWrapper>
          </Suspense>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
