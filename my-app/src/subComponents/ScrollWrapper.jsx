import styled from "styled-components";

const ScrollWrapper = styled.div`
  overflow-y: ${(props) => (props.scrollable ? "auto" : "hidden")};
  height: 100vh;
  width: 100%;
`;

export default ScrollWrapper;
