import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { BLUE, GRAYSCALE, GREEN, MAIN, ORANGE, PURPLE } from './ColorStyles';

const GlobalStyles = createGlobalStyle`
  :root {
    ${ORANGE};
    ${PURPLE};
    ${BLUE};
    ${GREEN};
    ${GRAYSCALE};
    ${MAIN};
  }

  ${reset}
  *{
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    vertical-align: baseline;
  }

  body{
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #FFFFFF;
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
`;

export default GlobalStyles;
