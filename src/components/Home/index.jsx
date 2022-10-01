import React, { useEffect, useState } from 'react'
import Repos from '../../repos.json'
import './index.css'
import RepoCard from '../../styled-components/RepoCard'

function Home() {
  const [repos,setRepos] = useState([])
  
  useEffect(() => {
    if(Repos.repos){
      setRepos(Repos.repos)  
    }
  }, [])
  
  return (
    <div>
      Contribute now on any one of these and get your profile listed in the contributors section
      <div className="cards">
        {
          repos.map((repo)=>{
            return <RepoCard key={repo.id} title={repo.title} body={repo.body} btnLink={repo.redirectTo} btnText={"Contribute"} />
          })
        }
      </div>
    </div>
  )
}

export default Home