import React from "react";
import { css } from "emotion";
import { useBreakpoint } from "../utils/UseWindowsSize";

const bioText =
  "I am a third-year student on Zagreb University of Applied Sciences. I have experience in most if not all branches of IT at least to some degree from the development of software, networking, system building, server setup, virtualization, software & hardware repair, to design in Adobe suite of software, as well as working with 3D objects in Cinema 4D & CAD. I have gained my experience through working for multiple companies such as CoreLine, Spica, A1, Eurocop and by freelancing. Because of these experiences, I have gained the competences needed to efficiently and comfortably work with others and alone. I am fluent in German and English, which I use daily in writing, speaking and listening.";
interface IAboutMe {
  user: any;
}
const bioStyle = css`
  display: flex;
  align-items: center;
  text-align: left;
  padding-top: 1vh;
  padding-bottom: 1vh;
`;

export const AboutMe = (props: IAboutMe) => {
  const { sm, md } = useBreakpoint();
  const { user } = props;
  const inStyle = css`
    width: 90vw;
    display: flex;
    margin: auto;
    font-size: ${sm || md ? "5vw" : "1.5vw"};
    flex-direction: ${sm || md ? "column" : "row"};
    color: 1e1e26;
  `;
  const imgStyle = css`
    height: ${sm || md ? "90vw" : "15vh"};
    width: ${sm || md ? "90vw" : "15vh"};
    border-radius: 50%;
    padding-bottom: ${sm || md ? "3vh" : "none"};
    padding-top: ${sm || md ? "3vh" : "none"};
  `;
  return (
    <div className={bioStyle}>
      <div className={inStyle}>
        <img className={imgStyle} src={user.avatar_url} alt={user.name} />
        <div style={{ paddingLeft: "1vw" }}>
          <div
            style={{
              paddingBottom: "1vh",
              fontWeight: "bold"
            }}
          >
            A bit more about myself:
          </div>
          {bioText}
        </div>
      </div>
    </div>
  );
};
