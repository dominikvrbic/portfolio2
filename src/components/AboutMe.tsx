import React from "react";
import { css } from "emotion";
interface IAboutMe {
  user: any;
}
const bioStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.5vw;
`;
const imgStyle = css`
  height: 15vh;
  width: 15vh;
  border-radius: 50%;
`;
export const AboutMe = (props: IAboutMe) => {
  const { user } = props;
  return (
    <div className={bioStyle}>
      <img className={imgStyle} src={user.avatar_url} alt={user.name} />
      <div>
        <div>somthing more about myself</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim
        quibusdam, at ab sit quas, repellat facere hic esse atque nemo, natus
        pariatur. Recusandae dolorem itaque pariatur tempore libero veniam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi
        corrupti neque, debitis aliquam error. Nostrum sint tenetur
        exercitationem. Provident, ex. Voluptate repellat doloremque temporibus
        vitae cum, fuga iusto velit! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Labore perspiciatis placeat, quis perferendis atque
        minima odit omnis laboriosam tempora voluptates qui quo aspernatur
        dignissimos voluptatem officia doloremque cum eum illum?
      </div>
    </div>
  );
};
