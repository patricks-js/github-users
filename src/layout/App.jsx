import { useContext } from "react";
import { UserContext, UserContextProvider } from "../contexts/UserContext";
import { Header } from "./Header";
import { View } from "./View";

import notFoundError from "../assets/404-image.png";

function App() {
  const { dataUser } = useContext(UserContext);

  const { name } = dataUser;

  return (
    <div className="w-full h-full text-gray-100 bg-gray-900">
      <Header />

      {name !== "" ? (
        <View />
      ) : (
        <div className="w-full h-full-s flex justify-center items-center flex-col">
          <div className="w-max bg-slate-800 py-5 px-4 rounded-md text-lg">
            Please, search a user in input above
          </div>
          <div className="w-max mt-5 relative">
            <span className="absolute text-9xl font-bold drop-shadow-2xl -left-24 bottom-10 animate-float ">
              404
            </span>
            <img src={notFoundError} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
