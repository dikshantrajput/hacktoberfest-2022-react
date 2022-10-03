import React, { useEffect, useState } from 'react'
import Repos from '../../repos.json'
import './index.css'
import RepoCard from '../../styled-components/RepoCard'
import PrinmaryButton from '../../styled-components/Buttons/primary'

function Home() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    if (Repos.repos) {
      setRepos(Repos.repos)
    }
  }, [])

  return (
    <div>
      Contribute now on any one of these and get your profile listed in the contributors section
      <span style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "1rem"
      }}>
        <PrinmaryButton link={'https://reactjs.org/'} text={"Learn more about React here"} external={false} />
      </span>

      <div className="cards text-center">
        {
          repos.map((repo) => {
            return <RepoCard key={repo.id} title={repo.title} body={repo.body} btnLink={repo.redirectTo} btnText={"Contribute"} />
          })
        }
      </div>
    </div>
  )
}

export default Home