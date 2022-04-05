import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StarknetProvider } from "@starknet-react/core";

ReactDOM.render(
  <React.StrictMode>
    <StarknetProvider>
      <App />
    </StarknetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
