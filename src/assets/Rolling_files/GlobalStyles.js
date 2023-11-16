import { createGlobalStyle } from "/node_modules/.vite/deps/styled-components.js?v=e7760f59";
import reset from "/node_modules/.vite/deps/styled-reset.js?v=e7760f59";

const GlobalStyles = createGlobalStyle`
  :root {
    --Purple1: #F8F0FF;
    --Purple2: #ECD9FF;
    --Purple3: #DCB9FF;
    --Purple4: #C894FD;
    --Purple5: #AB57FF;
    --Purple6: #9935FF;
    --Purple7: #861DEE;
    --Purple8: #6E0AD1;
    --Purple9: #5603A7;
    
    --Orange1: #FFF0D6;
    --Orange2: #FFE2AD;
    --Orange3: #FFC583;
    --Orange4: #FFAE65;
    --Orange5: #FF8832;

    --Blue1: #E2F5FF;
    --Blue2: #B1E4FF;
    --Blue3: #7CD2FF;
    --Blue4: #34B9FF;
    --Blue5: #00A2FE;

    --Green1: #E4FBDC;
    --Green2: #D0F5C3;
    --Green3: #9BE282;
    --Green4: #60CF37;
    --Green5: #2BA600;

    --Gray1: #F6F6F6;
    --Gray2: #EEEEEE;
    --Gray3: #CCCCCC;
    --Gray4: #999999;
    --Gray5: #555555;
    --Gray6: #4A4A4A;
    --Gray7: #3A3A3A;
    --Gray8: #2B2B2B;
    --Gray9: #181818;

    --White: #FFFFFF;
    --Black: #000000;
    --Error: #DC3A3A;
    --Surface: #F6F8FF;
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
