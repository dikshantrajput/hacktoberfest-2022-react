import React, { useEffect, useState } from 'react'
import { getData } from '../../helpers/Api'
import Repos from '../../repos.json'
import SecondaryButton from '../../styled-components/Buttons/secondary'
import RepoContributors from '../RepoContributors'

function Contributors() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    if(Repos.repos){
      setRepos(Repos.repos)
    }
  
  }, [])
  
  return (
    <div className="contributor__container">
      {repos.map((repo) => {
        return <RepoContributors key={repo.id} repo={repo} />;
      })}
    </div>
  );
}

export default Contributors