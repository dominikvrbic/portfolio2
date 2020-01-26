import React, { useState } from "react";
import { css } from "emotion";
import img from "../assets/img.jpg";
import { Button } from "./Button";
import { ButtonEnum } from "../types/enums";
import { useBreakpoint } from "../utils/UseWindowsSize";

const hoverStyle = css`
  background-color: #273655;
  opacity: 80%;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3vh;
`;
const buttonsStyle = css`
  align-self: flex-end;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const topStyle = css`
  display: flex;
  justify-content: flex-end;
  height: 90%;
`;
const elementWidth = css`
  width: 50%;
  text-align: left;
`;
const descriptionStyle = css`
  padding-top: 4vh;
`;
interface IProjectProps {
  repo: any;
}
export const Project = (props: IProjectProps) => {
  const { repo } = props;
  const [hover, sethover] = useState(false);
  const { sm, md } = useBreakpoint();

  const projectStyle = css`
    display: flex;
    background-image: url(${img});
    width: ${sm || md ? "100vw" : "25vw"};
    height: 25vh;
    background-size: 100%;
    background-repeat: no-repeat;
    color: white;
    font-size: ${sm || md ? "4vw" : "1.2vw"};
  `;
  const setOn = () => {
    sethover(true);
  };
  const setOff = () => {
    sethover(false);
  };
  return (
    <div onMouseEnter={setOn} onMouseLeave={setOff} className={projectStyle}>
      {hover && (
        <div className={hoverStyle}>
          <div className={topStyle}>
            <div className={elementWidth}>
              Project:{"\n"}
              {repo.name}
            </div>
            <div className={descriptionStyle}>
              Description:{"\n"}
              {repo.description}
            </div>
          </div>
          <div className={buttonsStyle}>
            <a target="_blank" href={repo.html_url}>
              <Button text={"Go to Github"} style={ButtonEnum.WHITE} />
            </a>
            {repo.homepage && (
              <a target="_blank" href={repo.homepage}>
                <Button text={"Go to page"} style={ButtonEnum.WHITE} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
