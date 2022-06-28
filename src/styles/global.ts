import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
    ${({ theme }) => css`
      * {
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        border: 0;
        background: none;
        font-family: ${theme.font.family};
      }

      body {
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.medium};
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
      }

      button {
        cursor: pointer;
      }

      html {
        background: ${theme.colors.primary};
      }
    `}
`;
