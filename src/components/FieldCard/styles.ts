// Core
import styled from "styled-components";

// Styles
import colors from "../../styles/colors";

export type Align = {
  align?: "left" | "right";
}

const MediaQuerie = `
  @media (max-width: 404px) {
    & {
      font-size: 12px;
    }
  }
`;

export const Area = styled.div<Align>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => {
    switch (props.align) {
      default:
      case "left": 
        return "flex-start";
      
      case "right":
        return "flex-end";
    }
  }};
`;

export const Label = styled.span<Align>`
  font-size: 16px;
  font-weight: bold;

  color: ${colors.emphasis};

  text-align: ${props => props.align ?? "left"};

  ${MediaQuerie}
`;

export const Value = styled.span<Align>`
  font-size: 16px;

  color: ${colors.secondary + 90};

  text-align: ${props => props.align ?? "left"};

  ${MediaQuerie}
`;