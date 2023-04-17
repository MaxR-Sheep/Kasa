import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Composant/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
