import React from "react";
import "./Button.css";
export default function Button({ text, width, height, onClick }) {
  return (
    <button
      onClick={onClick}
      href="#/"
      style={{ width: width, height: height }}
    >
      {text}
    </button>
  );
}
