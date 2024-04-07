import { LeftBar, Table } from "../../components";
import CommunityTitleBar from "./CommunityTitleBar";
import { FeedCard } from "../../components";
import { useState,useEffect } from "react";
import ppo from "../CommunityPage/pp.jpg";
import pp from "../CommunityPage/profile.jpg";
import comment from "../CommunityPage/comment.jpg";
import share from "../CommunityPage/share.jpg";
import image2 from "../CommunityPage/image2.jpg";
import image3 from "../CommunityPage/image3.jpg";

function CommunityPage({communityName}) {
  const [posts, setPosts] = useState([{}])
  useEffect(() => {
    setPosts([
      { values: 1 },
      { values: 2 },
      { values: 3 },
    ]);
  }, []);

  return(
      <div className="flex gap-12 max-w-screen overflow-x-hidden overflow-y-hidden ">
        <LeftBar />
        <div className="pb-6">
          <div className=" md:ml-64   px-6">
            <CommunityTitleBar CommunityTitle={"Software Engineering"} postNumber={posts.length} memberNumber={"12k"} photo={image2}/>
            {posts.map((post)=>(<FeedCard/>))}            
          </div>
        </div>
        <div className="fixed right-4 hidden z-0 lg:block">
          <Table />
        </div>
      </div>
  
  )
}

export default CommunityPage;
