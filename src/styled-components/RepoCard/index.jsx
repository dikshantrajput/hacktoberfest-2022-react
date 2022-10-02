import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Buttons/primary'
import './index.css'
import { useSelector } from "react-redux";

function RepoCard({title, body, btnText, btnLink}) {
    const mode = useSelector((state) => state.mode.value);

  return (
    <>
      <div className={mode ? "card__container__light" : "card__container"}>
        <Link
          to="/contributors"
          className={mode ? "repo__card__link_light" : "repo__card__link"}
        >
          <div className="card__header">{title}</div>
        </Link>
        <div className={mode?"card__body__light":"card__body"}>{body}</div>
        <PrimaryButton link={btnLink} text={btnText} external={true} />
      </div>
    </>
  );
}

export default RepoCard