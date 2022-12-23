import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import Web3Provider from "./providers/web3";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <React.StrictMode>
      <StoreProvider store={store}>
        <Web3Provider>
          <App />
        </Web3Provider>
      </StoreProvider>
    </React.StrictMode></>
);
