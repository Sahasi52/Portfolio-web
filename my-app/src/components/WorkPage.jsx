import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import Card from "../subComponents/Card";
import BigTitle from "../subComponents/BigTitle";
import { Work } from "../data/WorkData";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  height: ${({ workLength }) => `calc(100dvh + (${workLength} * 45vh))`};

  @media (max-width: 768px) {
    min-height: ${({ workLength }) => `calc(100vh + ${workLength * 45}vh)`};
    height: auto;
  }

  @media (max-width: 480px) {
    min-height: ${({ workLength }) => `calc(100vh + ${workLength * 45}vh)`};
    height: auto;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 11rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  will-change: transform;

  color: white;
  z-index: 5;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    margin-top: 2.5rem;
    padding: 1rem;
  }
`;

//Framer-motion configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

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
      <Box
        variants={container}
        initial="hidden"
        animate="show"
        workLength={Work.length}
      >
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="sus" />
        <Main
          variants={container}
          initial="hidden"
          animate="show"
          ref={ref}
          role="region"
          aria-label="Work portfolio cards"
        >
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <BigTitle text="WORK" top="15%" right="21%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
