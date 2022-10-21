import React from "react";
import "./index.css";

function PrimaryButton({ text, link, external = false }) {
  return (
    <button className="primary__button">
      <a className="anchor" href={link} target={`${external ? "__dk" : ""}`}>
        {text}
      </a>
    </button>
  );
}

export default PrimaryButton;
