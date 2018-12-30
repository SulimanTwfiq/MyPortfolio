import { createGlobalStyle } from "styled-components";

import "../fonts/fonts.css";
import media from "./media";
const GlobalStyle = createGlobalStyle`
:root {

    --color-primary:#4281A4;
    --color-secoundary: #48A9A6;
    --color-tinary:#E4DFDA; 
${"" /*     --color-primary:#68dcc8 ;
    --color-secoundary: #48A9A6;
    --color-tinary:#c5f1ee; */}
    --light: #e5f0ef;
    --box-color: #ababab;
    --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
    --font-size:19px
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
    color: black;
    font-size:19px;
    background-color: #e8e8e8;
    ${media.phone`
        font-size:23px;
    `}
  }
  a{
    text-decoration: none;
  }
 
`;

export default GlobalStyle;
