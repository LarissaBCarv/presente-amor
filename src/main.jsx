import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SelecaoProvider } from "./context/SelecaoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelecaoProvider>
      <App />
    </SelecaoProvider>
  </React.StrictMode>
);
