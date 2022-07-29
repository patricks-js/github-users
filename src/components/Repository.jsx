import { useEffect, useState } from "react";

export const Repository = ({
  name,
  description,
  language,
  repoLink,
  stargazers_count,
}) => {
  return (
    <div className="border border-gray-500 rounded-md py-2 px-4 w-full flex flex-col items-center justify-between gap-5 lg:flex-row">
      <div className="flex flex-col gap-1 flex-1">
        <a
          href={repoLink}
          target="_blank"
          className="cursor-pointer font-bold text-xl text-blue-400 hover:underline"
        >
          {name}
        </a>
        {description && <p className=" text-gray-400 text-sm">{description}</p>}
      </div>
      <div className="flex-1 justify-end">
        <div className="">
          Stars: <span>{stargazers_count}</span>
        </div>
        <div id="techs" className="">
          Technology: <span className="italic ">{language}</span>
        </div>
      </div>
    </div>
  );
};
