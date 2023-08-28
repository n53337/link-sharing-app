import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IconoirProvider } from "iconoir-react";
import AppRouter from "./helpers/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <IconoirProvider
        iconProps={{
          color: '#333333"',
          strokeWidth: 1,
          width: "1em",
          height: "1em",
        }}
      >
        {/* <App /> */}
        <AppRouter />
      </IconoirProvider>
    </BrowserRouter>
  </React.StrictMode>
);
