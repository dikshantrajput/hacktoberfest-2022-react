import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Mode from "../Mode";
import { useSelector } from "react-redux";
import logo from "../../assets/hacktober-logo.jpg";
function Header() {
  const mode = useSelector((state) => state.mode.value);

  return (
    <header className={mode ? "header__dark" : "header__light"} style={{justifyContent: "spaceAround"}}>
      <div className={mode ? "brand__container" : "brand__container__light"}>
        <Link to="/" className="fw-semibold">
          <img src={logo} alt="" width={"50px"} />
        </Link>
      </div>
      <div className="text-align-center">
        <nav className="navbar">
          <ul className="header__nav__list mb-0">
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
      </div>
      <div className="d-flex flex-row">
        <Mode />
        {mode && <span className="fa fa-moon-o ms-3">Dark Mode</span>}
        {mode || <span className="ms-3">Light Mode</span>}
      </div>
    </header>
  );
}

export default Header;
