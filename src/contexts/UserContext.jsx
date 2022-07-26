import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const url = "https://api.github.com/users";

  const [gitUser, setGitUser] = useState("");

  const [slug, setSlug] = useState("");

  const [dataUser, setDataUser] = useState({
    name: "",
    username: "",
    avatar: "",
    bio: "",
  });

  useEffect(() => {
    if (slug !== "") {
      (async () => {
        const { data } = await axios.get(`${url}/${slug}`);
        setDataUser({
          name: data.name,
          username: data.login,
          avatar: data.avatar_url,
          bio: data.bio,
        });
      })();
    } else {
      console.log("Waiting for data");
    }
  }, [slug]);
  return (
    <UserContext.Provider value={{ gitUser, setGitUser, setSlug, dataUser }}>
      {children}
    </UserContext.Provider>
  );
};
