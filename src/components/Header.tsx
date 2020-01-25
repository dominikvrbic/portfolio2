import React from "react";
import { css } from "emotion";
import img from "../assets/header1.jpg";

const headerStyle = css`
  background-size: 100%;
  min-height: 70vh;
  background-repeat: no-repeat;
  width: 100%;
`;
const textStyle = css`
  color: white;
  padding-top: 4vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const nameStyle = css`
  font-size: 6vw;
  max-width: 90vw;
`;
const paragraphStyle = css`
  padding-top: 2vh;
  font-size: 4vw;
  max-width: 90vw;
`;
export const Header = () => {
  return (
    <div className={headerStyle} style={{ backgroundImage: `url(${img})` }}>
      <div className={textStyle}>
        <div className={nameStyle}>DOMINIK VRBIC</div>
        <div className={paragraphStyle}>
          I am a full stack javascript developer focused on staying up to date
          so I can provide the best user experience to my customers
        </div>
      </div>
    </div>
  );
};