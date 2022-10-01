import React from 'react'
import './index.css'

function PrinmaryButton({text, link, external = false}) {
  return (
    <button className='primary__button'>
      <a href={link} target={`${external ? '__dk' : ''}`}>
        {text}
      </a>
    </button>
  )
}

export default PrinmaryButton