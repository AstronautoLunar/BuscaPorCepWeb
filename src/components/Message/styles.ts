// Core
import styled from "styled-components";

// Styles
import colors from "../../styles/colors";

export type TextProps = {
  isError?: boolean;
}

export const Text = styled.span<TextProps>`
  font-size: 24px;
  font-weight: bold;

  color: ${props => props.isError ? colors.danger : colors.secondary};
`;