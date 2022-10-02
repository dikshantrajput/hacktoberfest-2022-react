import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';

function Footer() {
  const mode = useSelector((state) => state.mode.value);

  return (
    <footer
      className={
        mode ? 'footer__dark text-center' : 'footer__light text-center'
      }
    >
      <a
        className="footer-a"
        href="https://hacktoberfest.com/"
        target="_blank"
        rel="noreferrer"
      >
        HacktoberFest Official Website{' '}
      </a>
      <a
        className="footer-a"
        href="https://github.com/dikshantrajput/hacktoberfest-2022-react"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        Contribute on Github{' '}
      </a>
      <a
        className="footer-a"
        href="https://twitter.com/Dikshantrajpu20"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        Follow me on Twitter{' '}
      </a>
    </footer>
  );
}

export default Footer;
