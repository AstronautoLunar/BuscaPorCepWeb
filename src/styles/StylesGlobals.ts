// Core
import { createGlobalStyle } from "styled-components";

// Styles
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  p, 
  span
  {
    color: ${colors.secondary};
  }
`;

export default GlobalStyle;