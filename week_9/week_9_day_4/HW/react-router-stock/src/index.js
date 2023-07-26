import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { StrictMode } from "react";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StrictMode>

    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);