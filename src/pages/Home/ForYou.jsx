import { useContext, useEffect, useState } from "react";
import { FeedCard } from "../../components";
import { AuthContext, MessageContext } from "../../context";
import { QuestionCard } from "../../components";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const ForYou = () => {
  const { addMessage } = useContext(MessageContext);
  const { user, myprofile } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setData([]);
    setPage(1);
    try {
      setLoading(true);
      const response = await fetch(`${backendUrl}api/posts/?page=${page}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const responseData = await response.json();
      if (responseData.results && Array.isArray(responseData.results)) {
        setData(responseData.results);
        setPage(1); // Reset page number when fetching new data
        setHasMoreData(responseData.results.length > 0);
      } else {
        console.error("No results found in the response data.");
        addMessage("No results found");
        setHasMoreData(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      addMessage("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const fetchHashtagPosts = async (hashtagPk) => {
    setData([]); // Reset data to null when fetching hashtag posts
    setPage(1); // Reset page number when fetching new data
    try {
      setLoading(true);
      const response = await fetch(
        `${backendUrl}api/posts/hashtag/${hashtagPk}/?page=${page}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.results && Array.isArray(responseData.results)) {
        setData(responseData.results);
        setPage(1); // Reset page number when fetching new data
        setHasMoreData(responseData.results.length > 0);
      } else {
        console.error("No results found in the response data.");
        addMessage("No results found");
        setHasMoreData(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      addMessage("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment page number
  };

  return (
    <div className="scroll md:min-w-[700px] md:max-w-[800px]">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => fetchData()}
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories {myprofile && myprofile.subscribed_hashtags.length}
        </button>
        {myprofile &&
          myprofile.subscribed_hashtags.map((hash, index) => (
            <button
              key={index}
              type="button"
              onClick={() => fetchHashtagPosts(hash.id)}
              className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            >
              {hash.name}
            </button>
          ))}
      </div>
      <div>
        {data !== null &&
          Array.isArray(data) &&
          data.map((d, index) => <FeedCard key={index} data={d} />)}
      </div>
      {data !== null && data.length > 0 && !loading && hasMoreData && (
        <div className="flex justify-center my-4 ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoadMore}
          >
            Load More
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
  );
};
