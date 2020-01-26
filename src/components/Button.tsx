import React from "react";
import { ButtonEnum } from "../types/enums";
import { css } from "emotion";
const buttonBlackStyle = css`
  border: 2px solid black;
  color: black;
  border-radius: 1vh;
  padding: 14px 28px;
  cursor: pointer;
  background-color: Transparent;
`;
const buttonWhiteStyle = css`
  border: 2px solid white;
  color: white;
  border-radius: 1vh;
  padding: 14px 28px;
  cursor: pointer;
  background-color: transparent;
`;
interface IButtonProps {
  style: ButtonEnum;
  text: string;
}
export const Button = (props: IButtonProps) => {
  const { style, text } = props;
  return (
    <button
      className={
        style === ButtonEnum.BLACK ? buttonBlackStyle : buttonWhiteStyle
      }
    >
      {text}
    </button>
  );
};
