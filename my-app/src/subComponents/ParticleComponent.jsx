import React from "react";
import styled from "styled-components";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

//particle config files
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";
import AmongUs from "../config/tsparticles-config.json";

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const config =
    theme === "sus" ? AmongUs : theme === "light" ? configLight : configDark;

  return (
    <Box>
      <Particles id="tsparticles" init={particlesInit} options={config} />
    </Box>
  );
};

export default ParticleComponent;
