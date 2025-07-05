import React from "react";
import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottie/loading.json";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Text = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-family: "Ubuntu Mono", monospace;
`;

const Loading = () => {
  return (
    <LoaderWrapper>
      <Lottie
        animationData={loadingAnimation}
        style={{ width: 200, height: 200 }}
      />
      <Text>loading, please wait...</Text>
    </LoaderWrapper>
  );
};

export default Loading;
