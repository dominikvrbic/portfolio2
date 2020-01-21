import React, { useState } from "react";
import "./App.css";
import { User, UserRepos } from "./getInfoFromGithub";
import { Spinner } from "./components/Spiner";
import { LandingPage } from "./Pages/LandingPage";
import { Footer } from "./components/Footer";

export const App = () => {
  const [userloading, setUserLoading] = useState(false);
  const [reposloading, setReposLoading] = useState(false);
  const user = User().then(() => setUserLoading(true));
  const userRepos = UserRepos().then(() => {
    setReposLoading(true);
  });
  console.log(user, userRepos);
  return (
    <>
      <div className="App">
        {userloading && reposloading ? (
          <LandingPage user={user} userRepos={userRepos} />
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
