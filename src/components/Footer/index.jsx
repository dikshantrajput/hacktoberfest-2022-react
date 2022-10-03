import React from 'react'
import './index.css'
import { useSelector } from "react-redux";

function Footer() {
  const mode = useSelector((state) => state.mode.value);

  return (
    <footer className={mode ? "footer__dark text-center" : "footer__light text-center"}>
      <a href="https://hacktoberfest.com/" target="_blank" rel="noreferrer">
        <img src="/images/hacktoberfest-logo.png" alt="" />
      </a>
      <a
        href="https://github.com/dikshantrajput/hacktoberfest-2022-react"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/github-logo.png" alt="" />
      </a>
      <a href="https://twitter.com/Dikshantrajpu20" target="_blank" rel="noreferrer">
        <img src="/images/twitter-logo.png" alt="" />
      </a>
    </footer>
  );
}

export default Footer
