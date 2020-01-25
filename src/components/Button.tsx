import React from "react";
import { ButtonEnum } from "../types/enums";
import { css } from "emotion";
const buttonBlackStyle = css`
  border: 1px solid black;
  color: black;
  border-radius: 50%;
`;
const buttonWhiteStyle = css`
  border: 1px solid white;
  color: white;
  border-radius: 50%;
`;
interface IButtonProps {
  style: ButtonEnum;
  text: string;
}
export const Button = (props: IButtonProps) => {
  const { style, text } = props;
  return (
    <div
      className={
        style === ButtonEnum.BLACK ? buttonBlackStyle : buttonWhiteStyle
      }
    >
      {text}
    </div>
  );
};
