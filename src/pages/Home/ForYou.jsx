import { useContext, useEffect, useState } from "react";
import { FeedCard } from "../../components";
import { AuthContext, MessageContext } from "../../context";
import { QuestionCard } from "../../components";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const ForYou = () => {
  const { addMessage } = useContext(MessageContext);
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [load, setLoad] = useState(0);

  let foryouFetch = async () => {
    let response = await fetch(`${backendUrl}api/posts`);
    let response_data = await response.json()
    console.log(response_data);
  };

  useEffect(() => {
    foryouFetch();
  }, [load]);
  return (
    <div className="scroll md:min-w-[700px] md:max-w-[800px]">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => setLoad(load + 1)}
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
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
      <QuestionCard />
      {/* {data.map((d) => (
        <FeedCard />
      ))} */}
    </div>
  );
};
