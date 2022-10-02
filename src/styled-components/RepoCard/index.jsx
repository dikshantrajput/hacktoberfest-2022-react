import React from 'react'
import { Link } from 'react-router-dom'
import PrinmaryButton from '../Buttons/primary'
import './index.css'

function RepoCard({title, body, btnText, btnLink}) {
  return (
    <>
      <div className='card__container'>
        <Link to='/contributors' className='repo__card__link'>
          <h2 className="card__header">
            {title}
          </h2>
        </Link>
        <div className="card__body">
          {body}
        </div>
        <PrinmaryButton link={btnLink} text={btnText} external={true} />
      </div>
    </>
  )
}

export default RepoCard
