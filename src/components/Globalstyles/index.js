import { createGlobalStyle } from "styled-components";
import { handleColorType } from "../utils/handleTypes";
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background: #1a1a1a;
    color: #fff;
    letter-spacing: .5px;
    height: 100%;
    animation: fadeInAnimation ease-out 2s;

   @keyframes fadeInAnimation {
    0% {
      opacity: 0%;
    }
    100% {
      opacity 1;
    }
  }
  }

  div {
    overflow: hidden;
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a{
    color: ${handleColorType("primary")}
  }
`;
