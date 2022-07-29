import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import { Users, MapPin, Link, Buildings } from "phosphor-react";

export const Profile = () => {
  const { dataUser } = useContext(UserContext);

  const {
    name,
    username,
    avatar,
    bio,
    followers,
    following,
    location,
    blog,
    company,
  } = dataUser;

  return (
    <div
      id="user"
      className="w-full max-w-xs rounded-xl bg-slate-800 h-max px-7 py-5 flex flex-col space-y-2"
    >
      <div
        id="avatar_url"
        className="w-full p-1 border-[3px] border-gray-600 rounded-full"
      >
        <img src={avatar} alt="Avatar" className="rounded-full object-cover" />
      </div>
      <div id="information" className="w-full grid gap-1">
        <p id="name" className="text-center font-bold text-3xl">
          {name}
        </p>
        <p
          id="username"
          className="text-center italic text-gray-400 text-xl mb-3"
        >
          {username}
        </p>
        <p id="bio" className="text-gray-200 mb-3">
          {bio}
        </p>
        <div className="flex items-center mb-2">
          <Users size={22} color="#fcfcfc" weight="light" />
          <span className="ml-2 mr-1">{followers}</span> followers • following{" "}
          <span className="ml-1">{following}</span>
        </div>
      </div>
      <div id="links">
        <ul className="flex flex-col space-y-2">
          {location && (
            <li className="flex items-center gap-1">
              <MapPin size={22} color="#fcfcfc" weight="light" />
              <span>{location}</span>
            </li>
          )}
          {blog && (
            <li className="flex items-center gap-1">
              <Link size={22} color="#fcfcfc" weight="light" />
              <a href={blog} target="_blank">
                {blog}
              </a>
            </li>
          )}
          {company && (
            <li className="flex items-center gap-1">
              <Buildings size={22} color="#fcfcfc" weight="light" />
              <span>{company}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
