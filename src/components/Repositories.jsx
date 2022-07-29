import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Repository } from "./Repository";

export const Repositories = () => {
  const { reposUser } = useContext(UserContext);
  return (
    <div className="w-full rounded-xl bg-slate-800 h-full px-7 py-5 flex flex-col gap-4">
      {reposUser.map((repo) => (
        <Repository
          key={repo.id}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          repoLink={repo.html_url}
          stargazers_count={repo.stargazers_count}
        />
      ))}
    </div>
  );
};
