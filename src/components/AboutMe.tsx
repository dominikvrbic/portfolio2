import React from "react";
import { css } from "emotion";

const bioText =
  "I am a third-year student on Zagreb University of Applied Sciences. I have experience in most if not all branches of IT at least to some degree from the development of software, networking, system building, server setup, virtualization, software & hardware repair, to design in Adobe suite of software, as well as working with 3D objects in Cinema 4D & CAD. I have gained my experience through working for multiple companies such as CoreLine, Spica, A1, Eurocop and by freelancing. Because of these experiences, I have gained the competences needed to efficiently and comfortably work with others and alone. I am fluent in German and English, which I use daily in writing, speaking and listening.";
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
        <div>Sty omthing more about myself</div>
        {bioText}
      </div>
    </div>
  );
};
