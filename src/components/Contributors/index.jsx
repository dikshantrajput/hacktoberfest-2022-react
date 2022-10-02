import React, { useEffect, useState } from 'react'
import Repos from '../../repos.json'
import RepoContributors from '../RepoContributors'

function Contributors() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    if(Repos.repos){
      setRepos(Repos.repos)
    }

  }, [])

  return (
    <div>
      {
        repos.map((repo)=>{
          return <RepoContributors key={repo.id} repo={repo} />
        })
      }
    </div>
  )
}

export default Contributors