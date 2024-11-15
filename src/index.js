import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RateContextProvider } from "./store/rateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RateContextProvider>
        <App />
      </RateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);