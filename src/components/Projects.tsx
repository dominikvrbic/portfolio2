import React from "react";
import { Project } from "./Project";
import { css } from "emotion";
import { useBreakpoint } from "../utils/UseWindowsSize";

interface IProjectsProps {
  userRepos: any;
}
export const Projects = (props: IProjectsProps) => {
  const { sm, md } = useBreakpoint();
  const projectsStyle = css`
    display: flex;
    align-items: center;
    flex-direction: ${sm || md ? "column" : "row"};
  `;

  const { userRepos } = props;
  return (
    <div className={projectsStyle}>
      {userRepos.map((repo: any) => (
        <Project repo={repo} />
      ))}
    </div>
  );
};
