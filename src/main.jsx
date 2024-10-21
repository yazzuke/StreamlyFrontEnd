import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Importa BrowserRouter
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>  {/* Envuelve todo dentro de BrowserRouter */}
        <main className="dark">
          <App />
        </main>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
);
