import React from "react";
import { Header } from "../components/Header";
import { Projects } from "./../components/Projects";
import { AboutMe } from "../components/AboutMe";
import { ContactMe } from "../components/ContactMe";

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
      <Projects userRepos={userRepos} />
      <AboutMe user={user} />
      <ContactMe />
    </>
  );
};
