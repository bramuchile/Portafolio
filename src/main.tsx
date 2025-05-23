import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import "./i18n"; // Importamos configuración de idiomas

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </React.StrictMode>
);
