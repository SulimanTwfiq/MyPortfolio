import { createGlobalStyle } from "styled-components";

import "../fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
:root {

    --color-primary:#4281A4;
    --color-secoundary: #48A9A6;
    --color-tinary:#E4DFDA;
    --light: #e5f0ef;
    --box-color: #ababab;
    --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  }
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Changa', sans-serif;
    padding: 0;
  }
  html,
  body {
    text-align:center;
    background-color: #fdfdfd;
    color: black;
    font-size:19px;
  }
  a{
    text-decoration: none;
  }
 
`;

export default GlobalStyle;
