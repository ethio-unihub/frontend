import { useContext, useEffect, useState } from "react";
import { FeedCard } from "../../components";
import { AuthContext, MessageContext } from "../../context";
import { QuestionCard } from "../../components";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const ForYou = () => {
  const { addMessage } = useContext(MessageContext);
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true); // Flag to track if there's more data to load

  const fetchData = async () => {
    try {
      const response = await fetch(`${backendUrl}api/posts/?page=${page}`);
      const responseData = await response.json();
      if (responseData.results && Array.isArray(responseData.results)) {
        setData((prevData) => [...prevData, ...responseData.results]);
        setPage((prevPage) => prevPage + 1);
        setHasMoreData(responseData.results.length > 0); // Update hasMoreData based on the new data
      } else {
        console.error("No results found in the response data.");
        addMessage("No results found");
        setHasMoreData(false); // No more data to load
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      addMessage("Error fetching data");
    } finally {
      setLoading(false); // Set loading to false when data is fetched
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setLoading(true); // Set loading to true before fetching data
    fetchData();
  };
  return (
    <div className="scroll md:min-w-[700px] md:max-w-[800px]">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => setLoad(load + 1)}
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories {data.length}
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Shoes
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Bags
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Electronics
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Gaming
        </button>
      </div>
      <div>
        {data.map((d, index) => (
          <FeedCard key={index} data={d} />
        ))}
      </div>
      {data.length > 0 && !loading && hasMoreData && (
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
