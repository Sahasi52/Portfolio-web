import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { CrestKamon, CrestKamonFilled } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  bottom: 50%;
  left: calc(2rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "80%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  z-index: 3;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  width: ${(props) => (props.click ? "100%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click} onClick={handleClick}>
          {click ? (
            <CrestKamonFilled width={120} height={120} fill="currentColor" />
          ) : (
            <CrestKamon width={200} height={200} fill="currentColor" />
          )}
          <span>click here</span>
        </Center>
        <Contact
          click={click}
          href="mailto:siamsadikhasan52@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h2>
        </Contact>
        <ABOUT to="/about" click={click}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            About
          </motion.h2>
        </ABOUT>
        <WORK to="/work" click={click}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WORK>
        <BottomBar>
          <SKILLS to="/skills" click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
