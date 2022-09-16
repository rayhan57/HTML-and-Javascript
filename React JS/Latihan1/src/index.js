import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);
