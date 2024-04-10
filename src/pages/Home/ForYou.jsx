import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context";
import { useHashtagPosts, useFetchPosts } from "../../hooks/";
import { FeedCard, QuestionCard } from "../../components";
import { Leaderboard } from "./Leaderboard";

export const ForYou = () => {
  const { user, myprofile } = useContext(AuthContext);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [selectedHashtagId, setSelectedHashtagId] = useState(null);
  const [fetchingPosts, setFetchingPosts] = useState(false);

  const {
    data: posts,
    loading,
    hasMoreData,
    setData,
    loadMore,
  } = selectedHashtagId
    ? useHashtagPosts(backendUrl, selectedHashtagId)
    : useFetchPosts(backendUrl);

  const handleHashtagClick = (hashtagId) => {
    setData([]);
    setSelectedHashtagId(hashtagId);
  };

  const handleLoadMore = () => {
    loadMore();
  };

  const handleAllHashtagsClick = () => {
    setData([]);
    setSelectedHashtagId(null);
    setFetchingPosts(true);
  };

  useEffect(() => {
    if (fetchingPosts) {
      useFetchPosts(backendUrl);
      setFetchingPosts(false);
    }
  }, [fetchingPosts, backendUrl]);

  return (
    <div className="flex gap-12">
      <div className="scroll md:min-w-[700px] md:max-w-[800px]">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className={`${
              selectedHashtagId === null
                ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            }`}
            onClick={handleAllHashtagsClick}
          >
            All Hashtags
          </button>
          {user && myprofile &&
            myprofile.subscribed_hashtags.map((hash, index) => (
              <button
                key={index}
                type="button"
                className={`${
                  selectedHashtagId === hash.id
                    ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                    : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                }`}
                onClick={() => handleHashtagClick(hash.id)}
              >
                #{hash.slug}
              </button>
            ))}
        </div>
        <div>
          {posts.map((post, index) => (
            <FeedCard key={index} data={post} />
          ))}
        </div>
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
              <QuestionCard key={index} />
            ))}
          </>
        )}
      </div>

      <div className="md:block hidden">
        <Leaderboard />
      </div>
    </div>
  );
};
