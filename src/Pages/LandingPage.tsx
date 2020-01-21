import React from "react";

interface ILandingPage {
  user: any;
  userRepos: any;
}
export const LandingPage = (props: ILandingPage) => {
  const { user, userRepos } = props;
  console.log(user, userRepos);
  return <div>sdasdd</div>;
};
