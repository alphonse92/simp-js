import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { theme, mutations } from "./theme";
import ThemeProvider from "./lib/simpTheme";
import "./index.css";
import Routes from "./Routes";
import Window from "./lib/platform/web/components/Window";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider
      theme={theme}
      mutations={mutations}
      styleRoot={document.head}
    >
      <Window>
        <Routes />
      </Window>
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
