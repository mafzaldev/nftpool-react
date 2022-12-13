import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop"></div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
