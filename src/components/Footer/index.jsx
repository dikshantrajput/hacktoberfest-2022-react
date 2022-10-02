import React from 'react'
import './index.css'
import { useSelector } from "react-redux";

function Footer() {
  const mode = useSelector((state) => state.mode.value);

  return (
    <footer className={mode ? "footer__dark" : "footer__light"}>
      <a href="https://hacktoberfest.com/" target="_blank">
        HacktoberFest Official Website{" "}
      </a>
      <a
        href="https://github.com/dikshantrajput/hacktoberfest-2022-react"
        target="_blank"
      >
        {" "}
        Contribute on Github{" "}
      </a>
      <a href="https://twitter.com/Dikshantrajpu20" target="_blank">
        {" "}
        Follow me on Twitter{" "}
      </a>
    </footer>
  );
}

export default Footer
