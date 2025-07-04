import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import Card from "../subComponents/Card";
import { Work } from "../data/WorkData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.ul`
  position: fixed;
  top: 11rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  will-change: transform;

  color: white;
  z-index: 5;
`;

const WorkPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      if (element) {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
      }
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="sus" />
        <Main ref={ref}>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
