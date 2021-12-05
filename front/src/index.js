import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MemberContextProvider } from "./store/memberContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MemberContextProvider>
        <App />
      </MemberContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
