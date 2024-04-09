// ForYou.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import {useFetchPosts} from "../../hooks"
import { FeedCard, QuestionCard } from "../../components";

export const ForYou = () => {
  const { user, myprofile } = useContext(AuthContext);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const { data, loading, hasMoreData, loadMore } = useFetchPosts(backendUrl);
  const [loadingMore, setLoadingMore] = useState(false); // Track loading state for "Load More" button

  const handleLoadMore = async () => {
    setLoadingMore(true); // Set loadingMore to true when "Load More" button is clicked
    await loadMore(); // Fetch more data
    setLoadingMore(false); // Set loadingMore back to false after data is fetched
  };

  return (
    <div className="scroll md:min-w-[700px] md:max-w-[800px]">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          abebe
        </button>
      </div>
      <div>
        {data.map((d, index) => (
          <FeedCard key={index} data={d} />
        ))}
      </div>
      {(loading || loadMore) && (
        <>
          {[...Array(15)].map((_, index) => (
            <QuestionCard key={index} />
          ))}
        </>
      )}
      {/* {(!loading || !loadMore) && hasMoreData && (
        <div className="flex justify-center my-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoadMore}
            disabled={loadingMore} // Disable button while loadingMore is true
          >
            {loadingMore ? "Loading..." : "Load More"}{" "}
            Change button text based on loadingMore state
          </button>
        </div>
      )} */}
    </div>
  );
};
