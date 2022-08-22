import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
  }


  body{
    background-color: #071422;
    color: #AFC2D4;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  body, textarea, input, button{
    font: 400 1rem Nunito, sans-serif;
  }
`