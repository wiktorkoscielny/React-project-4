import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
//Styles
import { createGlobalStyle } from 'styled-components'

// Just to protect Our Eyes :)
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff;
    text-align: center;
    margin: 0;
  }
`

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);