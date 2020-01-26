import React, { useState } from "react";
import { css } from "emotion";
import img from "../assets/img.jpg";
import { Button } from "./Button";
import { ButtonEnum } from "../types/enums";
const projectStyle = css`
  display: flex;
  background-image: url(${img});
  width: 25vw;
  height: 25vh;
  background-size: 100%;
  background-repeat: no-repeat;
  color: white;
`;
const hoverStyle = css`
  background-color: #273655;
  opacity: 80%;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2vh;
`;
const buttonsStyle = css`
  align-self: flex-end;
  display: flex;
  width: 100%;
`;
const topStyle = css`
  display: flex;
  justify-content: space-around;
`;
interface IProjectProps {
  repo: any;
}
export const Project = (props: IProjectProps) => {
  const { repo } = props;
  const [hover, sethover] = useState(false);
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
            <div>{repo.name}</div>
            <div>{repo.description}</div>
          </div>
          <div className={buttonsStyle}>
            <Button text={"Go to Github"} style={ButtonEnum.WHITE} />
            {repo.homepage && (
              <Button text={"Go to page"} style={ButtonEnum.WHITE} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
