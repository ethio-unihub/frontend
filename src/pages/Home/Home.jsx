import { LeftBar } from "../../components";
import { ForYou } from "./ForYou";

export const Home = () => {
  return (
    <div className="flex gap-12">
      <LeftBar />
      <div className="pb-6 h-screen overflow-y-auto">
        <div className="mt-[200px] md:ml-64 md:mt-[85px]  px-10">
          <ForYou />
        </div>

      </div>
    </div>
  );
};
