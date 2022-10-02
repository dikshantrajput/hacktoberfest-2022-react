import React from 'react'
import './index.css'
import { useSelector } from "react-redux";
import github from './GitHub-Mark-Light-32px.png'
import twitter from './2021 Twitter logo - white.png'
import hfest from './hfest-logo.png'

function Footer() {
  const mode = useSelector((state) => state.mode.value);

  return (
    <footer className={mode ? "footer__dark text-center" : "footer__light text-center"}>
      <a href="https://hacktoberfest.com/" target="_blank" rel="noreferrer">
        <img class="hfest" src={hfest}/>
      </a>
      <a
        href="https://github.com/dikshantrajput/hacktoberfest-2022-react"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github}/>
      </a>
      <a href="https://twitter.com/Dikshantrajpu20" target="_blank" rel="noreferrer">
          <img src={twitter}/>
      </a>
    </footer>
  );
}

export default Footer
