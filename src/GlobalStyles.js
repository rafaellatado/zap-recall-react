import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Body defaults */
  body {
    font-family: "Recursive", sans-serif;
    line-height: 1.4;
    color: #333;
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
  }

  /* Links */
/*   a {
    text-decoration: none;
    color: inherit;
  } */

  /* Images */
/*   img {
    max-width: 100%;
    display: block;
  } */

  /* General styles */
/*   button, input, select {
    font-family: inherit;
  } */
`;

export default GlobalStyles;
