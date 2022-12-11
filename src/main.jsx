import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { Provider } from 'react-redux'
import store from "./store";
import Web3Provider from "./providers";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3Provider>
        <App />
      </Web3Provider>
    </Provider>
  </React.StrictMode>
);
