import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Mode from '../Mode';
import { useSelector } from "react-redux";
function Header() {
    const mode = useSelector((state) => state.mode.value);

  return (
    <header className={mode ? "header__light" : "header__dark"}>
      <div className={mode ? "brand__container__light" : "brand__container"}>
        <Link to="/">Hactoberfest React</Link>
      </div>
      <nav>
        <ul className="header__nav__list">
          <li
            className={
              mode
                ? "header__nav__list__item__light"
                : "header__nav__list__item"
            }
          >
            <a href="https://hacktoberfest.com/" target="__dk">
              Hacktoberfest
            </a>
          </li>
          <li
            className={
              mode
                ? "header__nav__list__item__light"
                : "header__nav__list__item"
            }
          >
            <a
              href="https://github.com/dikshantrajput/hacktoberfest-2022-react"
              target="__dk"
            >
              Repository
            </a>
          </li>
          <li
            className={
              mode
                ? "header__nav__list__item__light"
                : "header__nav__list__item"
            }
          >
            <Link to="/contributors">Contributors</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Mode />
        {mode && <i class='fa fa-moon-o'>Light Mode</i>}
        {mode || <span>Dark Mode</span>}
      </div>
    </header>
  );
}

export default Header