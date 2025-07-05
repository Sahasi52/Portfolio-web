import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/profile-img.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  flex-direction: row;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.body} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.body} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.body};
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 65vw;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: -1rem;
  }

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      transform: translate(-50%, 80%);
      width: 76%;
    }

    @media (max-width: 480px) {
      transform: translate(-50%, 90%);
      width: 99%;
    }
  }
`;

const Text = styled.div`
  font-size: calc(1rem + 1.2vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    margin: 0;
    font-size: calc(1.2rem + 1vw);
  }

  h3 {
    margin: 0.5rem 0;
    font-size: calc(1rem + 0.8vw);
  }

  h6 {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.8rem + 0.6vw);
    font-weight: 300;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
    font-size: calc(1.5rem + 1.3vw);
  }

  h3 {
    font-size: calc(1.3rem + 1.1vw);
  }

  h6 {
    font-size: calc(1.1rem + 0.9vw);
  }

  @media (max-width: 480px) {
    h1 {
    font-size: calc(1.4rem + 1.2vw);
  }

  h3 {
    font-size: calc(1.2rem + 1vw);
  }

  h6 {
    font-size: calc(1rem + 0.8vw);
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm SaHaSi.</h3>
          <h6>Smart Code. Bold Design. Seamless Web Solutions.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img
            className="pic"
            src={Me}
            alt="SaHaSi - Web Developer Profile Picture"
          />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
