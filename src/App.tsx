import React from "react";
import { useAsync } from "react-use";
import "./App.css";
import { User, UserRepos } from "./getInfoFromGithub";
import { Spinner } from "./components/Spiner";
import { LandingPage } from "./Pages/LandingPage";

export const App = () => {
  const { value } = useAsync(async () => {
    const [userData, repoData] = await Promise.all([User(), UserRepos()]);
    return { userData, repoData };
  }, []);

  const userData = value?.userData;
  const repoData = value?.repoData;

  return (
    <>
      <div className="App">
        {!userData || !repoData ? (
          <Spinner />
        ) : (
          <LandingPage user={userData} userRepos={repoData} />
        )}
      </div>
    </>
  );
};
