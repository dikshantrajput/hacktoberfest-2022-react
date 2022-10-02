import React from 'react'
import { Link } from 'react-router-dom'
import PrinmaryButton from '../Buttons/primary'
import './index.css'
import { useSelector } from "react-redux";

function RepoCard({title, body, btnText, btnLink}) {
    const mode = useSelector((state) => state.mode.value);

  return (
    <>
      <div className={mode ? "card__container" : "card__container__light"}>
        <Link
          to="/contributors"
          className={mode ? "repo__card__link" : "repo__card__link_light"}
        >
          <div className="card__header">{title}</div>
        </Link>
        <div className={mode?"card__body":"card__body__light"}>{body}</div>
        <PrinmaryButton link={btnLink} text={btnText} external={true} />
      </div>
    </>
  );
}

export default RepoCard