import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        font-size: 1.6rem;
        font-family: 'Anaheim';
        background-color: ${theme.blue.base};
        color: ${theme.pink.light};
    }

    a, a:visited, a:link {
        font-size: 2rem;
        color: inherit
    }
`;

export const YellowAccent = styled.span`
  font-weight: bold;
  color: ${theme.yellow.base};
`;

export const CyanAccent = styled.span`
  font-weight: bold;
  color: ${theme.cyan.base};
`;
