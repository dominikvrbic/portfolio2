import React from "react";

interface IProjectsProps {
  userRepos: any;
}
export const Projects = (props: IProjectsProps) => {
  const { userRepos } = props;
  return (
    <div>
      {userRepos.map((repo: any) => (
        <div key={repo.id}>
          {repo}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </div>
      ))}
    </div>
  );
};
