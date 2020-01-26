import React from "react";
import { Project } from "./Project";
import { css } from "emotion";
const projectsStyle = css`
  display: flex;
  align-items: center;
`;
interface IProjectsProps {
  userRepos: any;
}
export const Projects = (props: IProjectsProps) => {
  const { userRepos } = props;
  return (
    <div className={projectsStyle}>
      {userRepos.map((repo: any) => (
        <Project repo={repo} />
      ))}
    </div>
  );
};
