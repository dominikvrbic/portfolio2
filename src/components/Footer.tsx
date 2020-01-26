import React from "react";
import { css } from "emotion";
import { useBreakpoint } from "../utils/UseWindowsSize";

export const Footer = () => {
  const { sm, md } = useBreakpoint();

  const footerTextStyle = css`
    width: 100%;
    color: white;
    text-align: center;
  `;
  const footerStyle = css`
    display: flex;
    align-items: center;
    background-color: black;
    height: 4vw;
    width: 100%;
    font-size: ${sm || md ? "3vw" : "0.8vw"};
    justify-content: center;
  `;

  return (
    <div className={footerStyle}>
      <div className={footerTextStyle}>
        Copyright © {new Date().getFullYear()} · Dominik Vrbic
      </div>
    </div>
  );
};
