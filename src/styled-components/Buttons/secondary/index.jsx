import React from 'react'
import './index.css'

function SecondaryButton({text, clickEvent}) {
  return (
    <button onClick={clickEvent} className='secondary__button'>
      {text}
    </button>
  )
}

export default SecondaryButton