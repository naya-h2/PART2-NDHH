import { BLUE, GRAYSCALE, GREEN, MAIN, ORANGE, PURPLE } from "@/styles/ColorStyles";
import { FONT16 } from "@/styles/FontStyles";
import { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const GlobalStyles = createGlobalStyle`
  :root {
    ${ORANGE};
    ${PURPLE};
    ${BLUE};
    ${GREEN};
    ${GRAYSCALE};
    ${MAIN};
  }

  *{
    box-sizing: border-box;
    font-family: "Noto Sans KR";
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table, button{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    vertical-align: baseline;
    /* animation: ${fadeIn} 0.3s ease-out; */
  }
  
  ol, ul{
    list-style: none;
  }

  button {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

 html{
    margin-left: 14px;

    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #FFFFFF;  

    overflow-y: scroll;
    overflow-x: hidden;

    /* overflow: overlay; */
  }

  ::-webkit-scrollbar {
  width: 14px;
  height: 14px;
  }

  ::-webkit-scrollbar-thumb {
  outline: none;
  border-radius: 10px;
  border: 4px solid transparent;
  box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.15);
  }

  ::-webkit-scrollbar-thumb:hover {
  border: 4px solid transparent;
  box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.3);
  }

  ::-webkit-scrollbar-track {
  box-shadow: none;
  }
`;

export default GlobalStyles;
