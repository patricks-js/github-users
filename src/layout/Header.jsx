import { useContext } from "react";
import logo from "../assets/github-brands1.svg";
import loop from "../assets/loop.svg";
import { UserContext } from "../contexts/UserContext";

export const Header = () => {
  const { gitUser, setGitUser, setSlug } = useContext(UserContext);

  function setUser() {
    setSlug(gitUser);
    setGitUser("");
  }
  return (
    <header className="w-full h-20 bg-slate-800 border-b border-gray-600 ">
      <div className="c-container px-2 sm:px-8 mx-auto h-full w-full flex items-center justify-between">
        <img src={logo} alt="Logo GitHub" className="w-16" />
        <fieldset className="flex">
          <label htmlFor="search">
            <span className="sr-only">Search User</span>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a user"
              className="outline-none border border-gray-300 bg-transparent pl-2 p-1 border-r-0 rounded-tl rounded-bl"
              onChange={(e) => setGitUser(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setUser()}
              value={gitUser}
            />
          </label>
          <button
            className="cursor-pointer flex items-center border-l-0 border border-gray-300 px-2 rounded-tr rounded-br"
            onClick={setUser}
          >
            <img src={loop} alt="loop" className="w-4 " />
          </button>
        </fieldset>
      </div>
    </header>
  );
};
