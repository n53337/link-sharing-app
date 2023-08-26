import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { IconoirProvider } from "iconoir-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IconoirProvider
      iconProps={{
        color: '#333333"',
        strokeWidth: 1,
        width: "1em",
        height: "1em",
      }}
    >
      <App />
    </IconoirProvider>
  </React.StrictMode>
);
