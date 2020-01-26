import React, { useState } from "react";
import { css, cx } from "emotion";
import { useFormContext, FieldError } from "react-hook-form";

const wrapperStyle = css`
  margin-bottom: 12px;
`;
const labelStyle = css`
  z-index: 1;
  position: absolute;
  transition: transform 0.25s ease-out;
  font-weight: 500;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  color: #444053;
  padding: 0px 8px 0px 8px;
  left: 6px;
`;
const containerStyle = css`
  border: 1px solid #273655;
  box-sizing: border-box;
  border-radius: 6px;
  min-width: 150px;
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
`;
const inputStyle = css`
  z-index: 2;
  background-color: transparent;
  position: relative;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #444053;
  width: 100%;
  height: 24px;
  margin-left: 14px;
  margin-right: 14px;
`;
const labelFocusedStyle = css`
  transition: all 0.25s ease-out;
  transform: translate(2px, -22px);
  background: white;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #6ac1b0;
`;
const errorStyle = css`
  color: #ff0e0e;
  border-color: #ff0e0e;
`;
const shakeAnimationStyle = css`
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-3px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(3px, 0, 0);
    }
  }
  animation: shake 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

interface ITextFieldProps {
  name: string;
  autoFocus?: boolean;
  placeholder?: string;
  containerStyle?: string;
  type?: "text" | "password";
}

export const TextField = (props: ITextFieldProps) => {
  const { placeholder = "", type = "text", autoFocus, name } = props;
  const [isFocused] = useState(autoFocus);
  const { register, errors, watch } = useFormContext();
  const value = watch(name);
  const error = errors[name] as FieldError;

  return (
    <div className={cx([wrapperStyle])}>
      <div className={cx([containerStyle, error && errorStyle])}>
        <input name={name} type={type} ref={register} className={inputStyle} />
        <label
          className={cx([
            labelStyle,
            (isFocused || (value && value.trim().length > 0)) &&
              labelFocusedStyle,
            error && errorStyle
          ])}
        >
          {placeholder}
        </label>
      </div>
      <div
        style={{ minHeight: 14, marginLeft: 6 }}
        className={cx(error && shakeAnimationStyle)}
      >
        {error && <span className={errorStyle}>{error.message}</span>}
      </div>
    </div>
  );
};
