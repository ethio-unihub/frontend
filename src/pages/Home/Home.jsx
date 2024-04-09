import { LeftBar, Leaderboard } from "../../components";
import { ForYou } from "./ForYou";

export const Home = () => {
  return (
    <div className="flex gap-12 max-w-screen overflow-x-hidden overflow-y-hidden ">
      <LeftBar />
      <div className="pb-6">
        <div className=" md:ml-64   px-6">
          <ForYou />
        </div>
      </div>
      <div className="fixed right-4 hidden z-0 lg:block">
        <Leaderboard />
      </div>
    </div>
  );
};
