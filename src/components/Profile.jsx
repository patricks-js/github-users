import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Profile = () => {
  const { dataUser } = useContext(UserContext);

  const { name, username, avatar, bio } = dataUser;

  return (
    <div
      id="user"
      className="w-80 rounded-xl bg-slate-800 max-h-max px-7 py-5 flex flex-col space-y-2"
    >
      <div
        id="avatar_url"
        className="w-full p-1 border-[3px] border-gray-600 rounded-full"
      >
        <img
          //   src={avatar}
          alt="Avatar"
          className="rounded-full object-cover"
        />
      </div>
      <div id="information" className="w-full grid gap-1">
        <p id="name" className="text-center font-bold text-3xl">
          {/* {name} */}
        </p>
        <p id="username" className="text-center italic text-gray-400 text-xl">
          {/* {username} */}
        </p>
        <p id="bio" className="text-gray-200">
          {/* {bio} */}
        </p>
      </div>
      <div id="links" className="">
        <ul>
          <li>
            <a href="#">Link1</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
