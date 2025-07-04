import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Code, Develope } from "./AllSvgs";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  margin-top: 4rem;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.4rem + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
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

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box variants={container} initial="hidden" animate="show">
        <PowerButton />
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />
        <Main
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Title>
            <Code width={40} height={40} />
            Coder
          </Title>
          <Description>
            I’m passionate about coding—solving complex problems with clean,
            efficient solutions.
          </Description>
          <Description>
            <strong>Languages</strong>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>CodeBlocks, IntelliJ etc.</p>
          </Description>
        </Main>
        <Main
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Title>
            <Develope width={40} height={40} />
            Developer
          </Title>
          <Description>
            I build websites because I enjoy the creative process and bringing
            ideas to life through code.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>HTML, CSS, JS, React, Tailwind CSS, Node JS, MySQL etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>VScode</li>
              <li>XAMPP</li>
            </ul>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="79%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
