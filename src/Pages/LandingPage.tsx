import React from "react";
import { Header } from "../components/Header";

interface ILandingPage {
  user: any;
  userRepos: any;
}
export const LandingPage = (props: ILandingPage) => {
  const { user, userRepos } = props;

  console.log(user, userRepos);
  return (
    <>
      <Header />
      {/* <h3>Moja ruzna faca: </h3>
      <img src={user.avatar_url} alt="Moja ruzna faca"></img>
      <h3>Moja sranja:</h3>
      {userRepos.map((repo: any) => {
        return (
          <React.Fragment key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <br />
          </React.Fragment>
        );
      })} */}
    </>
  );
};
