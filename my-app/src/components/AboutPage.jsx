import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import spaceman from "../assets/astronaut.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100svh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`;

const FloatWrapper = styled.div`
  animation: ${float} 4s ease infinite;
  width: 100%;
  height: auto;
`;

const Astronaut = styled(motion.div)`
  position: fixed;
  top: 10%;
  right: 5%;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    top: 2%;
    right: 2%;
    width: 35vw;
  }

  @media (max-width: 480px) {
    width: 40vw;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: fixed;
  left: calc(5rem + 5vw);
  top: 8rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media (max-width: 768px) {
    height: 65vh;
    left: calc(7rem + 6vw);
    font-size: calc(0.8rem + 1.4vw);
    top: 9rem;
  }

  @media (max-width: 480px) {
    height: 55vh;
    left: calc(3.5rem + 3.5vw);
    font-size: calc(0.7rem + 1.2vw);
    top: 11rem;
  }
`;

//Framer-motion configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.5,
    },
  },
};

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box variants={container} initial="hidden" animate="show">
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />
        <Astronaut variants={item} initial="hidden" animate="show">
          <FloatWrapper>
            <img
              src={spaceman}
              alt="Floating astronaut representing exploration"
            />
          </FloatWrapper>
        </Astronaut>
        <Main>
          I'm a full-stack developer who loves making fun, clean, and cool
          websites. I'm all about experimenting with tech, solving problems, and
          building things that make people go "whoa!".
          <br />
          <br />
          Whether it’s frontend magic or backend logic, I enjoy the whole stack!
          I believe anything's possible with curiosity, hard work, and some
          well-placed semicolons;
          <br />
          <br />
          Email: siamsadikhasan52@gmail.com
        </Main>
        <BigTitle text="ABOUT" top="13%" left="0%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
