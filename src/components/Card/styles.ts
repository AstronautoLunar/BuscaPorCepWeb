// Core
import styled from "styled-components";

// Styles
import colors from "../../styles/colors";

export const Container = styled.div`
  padding: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  border-radius: 24px;
  border: 2px solid ${colors.secondary};
`;

// export const 