import React from 'react'
import './index.css'
import github from './GitHub-Mark-Light-32px.png'
import twitter from './2021 Twitter logo - white.png'
import hfest from './hfest-logo.png'

function Footer() {
  return (
    <footer>
     <a href="https://hacktoberfest.com/" target="_blank"><img class="hfest" src={hfest}/></a>
     <a href="https://github.com/dikshantrajput/hacktoberfest-2022-react" target="_blank"><img src={github}/></a>
     <a href="https://twitter.com/Dikshantrajpu20" target="_blank">  <img src={twitter}/></a>
    </footer>
  )
}

export default Footer
