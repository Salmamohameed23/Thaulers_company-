import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import App from "./App";
import "./styles/globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <LanguageProvider>
      <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
