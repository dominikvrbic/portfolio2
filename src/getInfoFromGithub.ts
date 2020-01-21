import axios from "axios";

export const User = async () => {
  const res = await axios.get(
    `https://api.github.com/users/dominikvrbic?client_id=86208d54fc3bad8697bf&client_secret=4e53af38ae37556d805c7b48b0ee9b7755ce2b39`
  );
  return res.data;
};

export const UserRepos = async () => {
  const res = await axios.get(
    `https://api.github.com/users/dominikvrbic/repos?per_page=5&sort=created:asc&client_id=86208d54fc3bad8697bf&client_secret=4e53af38ae37556d805c7b48b0ee9b7755ce2b39`
  );
  return res.data;
};
