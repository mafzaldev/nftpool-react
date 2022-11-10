import React from "react";
import "./Button.css";
export default function Button({ text, width, height }) {
  return (
    <button href="#/" style={{ width: width, height: height }}>
      {text}
    </button>
  );
}
