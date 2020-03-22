import React from "react";
import { ButtonEnum } from "../types/enums";
import { css, cx } from "emotion";
import { useBreakpoint } from "../utils/UseWindowsSize";

const buttonBlackStyle = css`
  border: 2px solid black;
  color: black;
  padding: 10px;
`;
const buttonWhiteStyle = css`
  border: 3px solid white;
  color: white;
  padding: 10px;
`;
interface IButtonProps {
  style?: ButtonEnum;
  text: string;
}
export const Button = (props: IButtonProps) => {
  const { style, text } = props;
  const { sm, md } = useBreakpoint();
  const buttonStyle = css`
    font-size: ${sm || md ? "4vw" : "1.2vw"};
    cursor: pointer;
    background-color: Transparent;
  `;
  return (
    <button
      className={
        style === ButtonEnum.BLACK
          ? cx(buttonBlackStyle, buttonStyle)
          : cx(buttonWhiteStyle, buttonStyle)
      }
    >
      {text}
    </button>
  );
};
