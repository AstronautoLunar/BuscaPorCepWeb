// Core
import styled from "styled-components";

// Styles
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${colors.dominant};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;