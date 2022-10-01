import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Header() {
  return (
    <header>
      <div className='brand__container'>
        <Link to='/'>
          Hactoberfest React
        </Link>
      </div>
      <nav>
        <ul className='header__nav__list'>
          <li className='header__nav__list__item'>
            <a href='https://hacktoberfest.com/' target='__dk'>
              Hacktoberfest
            </a>
          </li>
          <li className='header__nav__list__item'>
            <a href='https://github.com/dikshantrajput/hacktoberfest-2022-react' target='__dk'>
              Repository
            </a>
          </li>
          <li className='header__nav__list__item'>
            <Link to='/contributors'>
              Contributors
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header