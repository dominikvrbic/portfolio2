import React from "react";
import { css } from "emotion";
import { Navbar } from "./Navbar";
import img from "../assets/header1.jpg";

const headerStyle = css`
  background-size: 100%;
  min-height: 60vh;
  background-repeat: no-repeat;
  width: 100%;
`;
export const Header = () => {
  return (
    <div className={headerStyle} style={{ backgroundImage: `url(${img})` }}>
      <Navbar />
    </div>
  );
};
