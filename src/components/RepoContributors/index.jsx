import React, { useEffect, useState } from "react";
import { getData } from "../../helpers/Api";
import SecondaryButton from "../../styled-components/Buttons/secondary";
import ContributorCard from "../../styled-components/ContributorCard";
import "./index.css";

function RepoContributors({ repo }) {
  const [pageNo, setPageNo] = useState(1);
  const [contributors, setContributors] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const getAllContributorsOfRepo = async (userName, repoName, page) => {
    let options = {};
    let url = `https://api.github.com/repos/${userName}/${repoName}/contributors?per_page=10&page=${page}`;
    const repoContributos = await getData(url, options);
    setContributors(repoContributos);
    if (repoContributos.length < 10) {
      return setLoadMore(false);
    }
  };

  const loadMoreContributors = () => {
    setPageNo((prev) => prev + 1);
    getAllContributorsOfRepo(repo?.username, repo?.reponame, pageNo);
  };

  useEffect(() => {
    getAllContributorsOfRepo(repo?.username, repo?.reponame, pageNo);
  }, [pageNo, repo?.reponame, repo?.username]);

  return (
    <div>
      <a href={repo.redirectTo}>
        <h2 className="repo__name">{repo?.reponame}</h2>
      </a>
      <div className="contributor__container">
        {contributors.map((contributor) => {
          return (
            <ContributorCard key={contributor.id} contributor={contributor} />
          );
        })}
      </div>
      {loadMore && (
        <div className="load__more__container">
          <SecondaryButton
            text={"Load More"}
            clickEvent={loadMoreContributors}
          />
        </div>
      )}
    </div>
  );
}

export default RepoContributors;
