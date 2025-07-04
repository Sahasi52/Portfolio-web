import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import spaceman from "../assets/astronaut.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`;

const Astronaut = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
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

  position: absolute;
  left: calc(5rem + 5vw);
  top: 7rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <PowerButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />
        <Astronaut>
          <img src={spaceman} alt="astronaut" />
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
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
