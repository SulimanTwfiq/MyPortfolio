import { createGlobalStyle } from "styled-components";

import "../fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: rgb(0,69,66);
    --secoundary-color: rgb(0,173,167);
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
    background-color: var(--light);
    color: #3b4e3e;
    font-size:19px;
  }
  a{
    text-decoration: none;
  }
 
`;

export default GlobalStyle;
