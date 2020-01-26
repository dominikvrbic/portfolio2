import React from "react";
import { Project } from "./Project";
import { css } from "emotion";
import { useBreakpoint } from "../utils/UseWindowsSize";
import Typography from "@material-ui/core/Typography";

interface IProjectsProps {
  userRepos: any;
}
export const Projects = (props: IProjectsProps) => {
  const { sm, md } = useBreakpoint();
  const projectsStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${sm || md ? "column" : "row"};
  `;

  const { userRepos } = props;
  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">
        Here you can find some of my work:
      </Typography>
      <div>
        <div className={projectsStyle}>
          <Project repo={userRepos[0]} />
          <Project repo={userRepos[1]} />
        </div>
        <div className={projectsStyle}>
          <Project repo={userRepos[2]} />
          <Project repo={userRepos[3]} />
        </div>
      </div>
    </>
  );
};
