// Core
import styled from "styled-components";

// Styles
import colors from "../../styles/colors";

export type AreaProps = {
  align?: "left" | "right";
}

export const Area = styled.div<AreaProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;

  color: ${colors.emphasis};
`;

export const Value = styled.span`
  font-size: 16px;

  color: ${colors.secondary + 90};
`;