import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  width: 16rem;
  height: 45vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 18rem;
    height: 40vh;
  }

  @media (max-width: 480px) {
    width: 14rem;
    height: 35vh;
  }
`;

const Title = styled.h2`
  font-size: calc(0.8rem + 0.5rem);

  @media (max-width: 768px) {
    font-size: calc(1.1rem + 0.7rem);
  }

  @media (max-width: 480px) {
    font-size: calc(1rem + 0.4rem);
  }
`;

const Description = styled.h2`
  font-size: calc(0.6rem + 0.3rem);
  font-family: "Karla", sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: calc(0.9rem + 0.5rem);
  }

  @media (max-width: 480px) {
    font-size: calc(0.8rem + 0.2rem);
  }
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.6rem + 0.3vw);

  @media (max-width: 768px) {
    font-size: calc(0.9rem + 0.5vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.8rem + 0.2vw);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(0.8rem + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    font-size: calc(1.1rem + 0.7vw);
  }

  @media (max-width: 480px) {
    font-size: calc(1rem + 0.4vw);
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

// Framer-motion configuration
const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { name, description, tags, demo, github } = props.data;

  return (
    <Box variants={item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => (
          <Tag key={id}>#{t}</Tag>
        ))}
      </Tags>
      <Footer>
        <Link href={demo} target="_blank" rel="noopener noreferrer">
          Visit
        </Link>
        <Git href={github} target="_blank" rel="noopener noreferrer">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
