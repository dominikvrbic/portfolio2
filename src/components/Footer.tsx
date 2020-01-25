import React from "react";
import { css } from "emotion";

const footerStyle = css`
  display: flex;
  align-items: center;
  background-color: black;
  height: 4vw;
  width: 100%;
  font-size: 1.8vw;
  justify-content: center;
`;

export const Footer = () => {
  const footerTextStyle = css`
    width: 100%;
    color: white;
    text-align: center;
  `;

  return (
    <div className={footerStyle}>
      <div className={footerTextStyle}>
        Copyright © {new Date().getFullYear()} · Dominik Vrbic
      </div>
    </div>
  );
};
