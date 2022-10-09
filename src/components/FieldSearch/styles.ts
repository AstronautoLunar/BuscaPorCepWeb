// Core
import styled from "styled-components";

// Styles
import colors from "../../styles/colors";

type ContainerProps = {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: 8px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 24px;

  border: 2px solid ${props => props.color ?? colors.secondary};

  transition: all 550ms;

  @media (max-width: 404px) {
    & {
      width: calc(100% - 56px);
    }
  }
`;

type InputProps = {
  colorText?: string;
}

export const Input = styled.input<InputProps>`
  background-color: transparent;

  border: none;
  outline: none;

  font-size: 24px;

  width: 100%;
  
  margin-left: 8px;

  color: ${props => props.colorText ?? colors.secondary};
`;