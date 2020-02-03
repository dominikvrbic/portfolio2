import React from "react";
import { Header } from "../components/Header";
import { Projects } from "./../components/Projects";
import { AboutMe } from "../components/AboutMe";
import { ContactMe } from "../components/ContactMe";

import { Footer } from "../components/Footer";
import { Technologies } from "../components/Technologies";

interface ILandingPage {
  user: any;
  userRepos: any;
}
export const LandingPage = (props: ILandingPage) => {
  const { user, userRepos } = props;

  return (
    <>
      <Header />
      <Technologies />
      <Projects userRepos={userRepos} />
      <AboutMe user={user} />
      <ContactMe />
      <Footer />
    </>
  );
};
