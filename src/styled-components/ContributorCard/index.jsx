import React from 'react'
import PrinmaryButton from '../Buttons/primary'
import './index.css'
import { useSelector } from 'react-redux'
function ContributorCard({contributor}) {
  const {login, avatar_url, html_url } = contributor
  const mode = useSelector((state) => state.mode.value);
  return (
    <div className={mode ? "card__container" : "card__container__ligth"}>
      <div className="repo__card__header">
        <div className="repo__card__user__profile">
          <div className="avatar__container">
            <img src={avatar_url} alt="user avatar" className='avatar' />
          </div>
          {login}
        </div>
        <div className="repo__card__btn">
          <PrinmaryButton link={html_url} text={"Profile"} external={true} />
        </div>
      </div>
    </div>
  )
}

export default ContributorCard