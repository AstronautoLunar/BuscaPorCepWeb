import styled, { keyframes } from "styled-components";

const toSpin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export const Container = styled.div`
  animation-name: ${toSpin};
  animation-duration: 700ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;