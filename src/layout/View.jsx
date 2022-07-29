import { Profile } from "../components/Profile";
import { Repositories } from "../components/Repositories";

export const View = () => {
  return (
    <main className="c-container sm:px-8 mx-auto py-5 h-full-s flex justify-between gap-5 flex-col items-center md:flex-row md:items-start">
      <Profile />
      <Repositories />
    </main>
  );
};
