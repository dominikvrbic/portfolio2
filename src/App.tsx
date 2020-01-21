import React, { useState, useEffect } from "react";
import "./App.css";
import { User, UserRepos } from "./getInfoFromGithub";
import { Spinner } from "./components/Spiner";
import { LandingPage } from "./Pages/LandingPage";
import { Footer } from "./components/Footer";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    Promise.all([
      User(),
      UserRepos()
    ]).then(([user, repos]) => {
      setUserData(user);
      setRepoData(repos);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <Spinner />
        ) : (
          <LandingPage user={userData} userRepos={repoData} />
        )}
      </div>
      <Footer />
    </>
  );
};
