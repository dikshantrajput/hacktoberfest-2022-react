import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Buttons/primary'
import './index.css'

function RepoCard({title, body, btnText, btnLink}) {
  return (
    <>
      <div className='card__container'>
        <Link to='/contributors' className='repo__card__link'>
          <div className="card__header">
            {title}
          </div>
        </Link>
        <div className="card__body">
          {body}
        </div>
        <PrimaryButton link={btnLink} text={btnText} external={true} />
      </div>
    </>
  )
}

export default RepoCard