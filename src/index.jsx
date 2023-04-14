import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import Home from "./Pages/Home";
import { BrowserRouter, Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
