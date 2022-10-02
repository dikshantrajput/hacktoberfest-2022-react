import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Mode from '../Mode';
import { useSelector } from "react-redux";
function Header() {
    const mode = useSelector((state) => state.mode.value);

  return (
    <header className={mode ? "header__dark" : "header__light"}>
      <div className={mode ? "brand__container" : "brand__container__light"}>
        <Link to="/">Hactoberfest React</Link>
      </div>
      <nav>
        <ul className="header__nav__list">
          <li
            className={
              mode
                ? "header__nav__list__item"
                : "header__nav__list__item__light"
            }
          >
            <a href="https://hacktoberfest.com/" target="__dk">
              Hacktoberfest
            </a>
          </li>
          <li
            className={
              mode
                ? "header__nav__list__item"
                : "header__nav__list__item__light"
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
                ? "header__nav__list__item"
                : "header__nav__list__item__light"
            }
          >
            <Link to="/contributors">Contributors</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Mode />
        {mode && <i className='fa fa-moon-o'>Dark Mode</i>}
        {mode || <span>Light Mode</span>}
      </div>
    </header>
  );
}

export default Header