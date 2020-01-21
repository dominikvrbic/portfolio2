import React, { useState } from "react";
import "./App.css";
import { User, UserRepos } from "./getInfoFromGithub";
import { Spinner } from "./components/Spiner";
import { LandingPage } from "./Pages/LandingPage";
import { Footer } from "./components/Footer";

export const App = () => {
  const [userloading, setUserLoading] = useState(false);
  const [reposloading, setReposLoading] = useState(false);
  const user = User().then(res => {
    setUserLoading(true);
    return res;
  });
  const repos = UserRepos().then(res => {
    setReposLoading(true);
    return res;
  });

  return (
    <>
      <div className="App">
        {userloading && reposloading ? (
          <LandingPage user={user} userRepos={repos} />
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </>
  );
};
