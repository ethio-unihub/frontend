import { useState, useEffect } from "react";
import { LeftBar } from "../Home";
import { Filter } from "./Filter";
import { useFetchPosts } from "../../hooks";
import { FileCard, FileLoading } from "../../components";

export const Files = () => {
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const [sortedPosts, setSortedPosts] = useState([]);

  const {
    data: posts,
    loading,
    hasMoreData,
    setData,
    loadMore,
  } = useFetchPosts(`${backendUrl}api/files/`);

  const handleLoadMore = () => {
    loadMore();
  };
  console.log(posts);

  useEffect(() => {
    if (posts) {
      // Sort the posts based on the difference between upvotes and downvotes
      const sorted = [...posts].sort((a, b) => {
        const scoreA = a.upvotes.length - a.downvotes.length;
        const scoreB = b.upvotes.length - b.downvotes.length;
        return scoreB - scoreA;
      });
      setSortedPosts(sorted);
    }
  }, [posts]);
  return (
    <div>
      <LeftBar />
      <div className="md:ml-[280px] mx-8 flex flex-wrap ">
        <div>
          {sortedPosts && sortedPosts.map((post, index) => <FileCard />)}
          {!loading && hasMoreData && (
            <div className="flex justify-center my-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLoadMore}
              >
                {posts ? "Load More" : "Try again"}
              </button>
            </div>
          )}
          {loading && (
            <>
              {[...Array(15)].map((_, index) => (
                <FileLoading key={index} />
              ))}
            </>
          )}
        </div>
        <Filter />
      </div>
    </div>
  );
};
