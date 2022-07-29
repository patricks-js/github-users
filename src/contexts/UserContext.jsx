import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const url = "https://api.github.com/users";

  const [slug, setSlug] = useState("");

  const [gitUser, setGitUser] = useState("");

  const [dataUser, setDataUser] = useState({
    name: "",
    username: "",
    avatar: "",
    bio: "",
    followers: "",
    following: "",
    location: "",
    blog: "",
    company: "",
  });

  const [reposUser, setReposUser] = useState([]);

  // Treatment of user data

  useEffect(() => {
    if (slug !== "") {
      (async () => {
        const { data } = await axios.get(`${url}/${slug}`);
        setDataUser({
          name: data.name,
          username: data.login,
          avatar: data.avatar_url,
          bio: data.bio,
          followers: data.followers,
          following: data.following,
          location: data.location,
          blog: data.blog,
          company: data.company,
        });
      })();
    }
  }, [slug]);

  // Processing of repository data

  useEffect(() => {
    if (slug !== "") {
      (async () => {
        const { data } = await axios.get(`${url}/${slug}/repos`);
        data.forEach((repo) => {
          setReposUser((prev) => [...prev, repo]);
        });
      })();
    }
  }, [slug]);

  return (
    <UserContext.Provider
      value={{ gitUser, setGitUser, setSlug, dataUser, url, reposUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
