import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #004542;
    --secoundary-color: #00ada7;
    --light: #e5f0ef;
    --box-color: #ababab;
    --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  }
  
  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: var(--light);
    font-family: 'Markazi Text', serif;

  }
  a{
    text-decoration: none;
  }
 
`;

export default GlobalStyle;
