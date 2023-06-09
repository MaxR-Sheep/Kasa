import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
