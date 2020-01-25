import React from "react";

interface IProjectsProps {
  repos: any;
}
export const Projects = (props: IProjectsProps) => {
  return (
    <div>
      {/* {userRepos.map((repo: any) => {
    return (
      <React.Fragment key={repo.id}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
        <br />
      </React.Fragment>
    );
  })} */}
    </div>
  );
};
