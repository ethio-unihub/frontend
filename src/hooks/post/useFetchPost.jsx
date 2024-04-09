// useFetchPosts.js
import { useState, useEffect } from "react";

export const useFetchPosts = (backendUrl) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track current page number
  const [hasMoreData, setHasMoreData] = useState(true); // Track if there is more data available

  const fetchPost = async (pageNumber) => {
    try {
      let response = await fetch(`${backendUrl}api/posts/?page=${pageNumber}`);
      let get = await response.json();
      setData((prevData) => [...prevData, ...get.results]); // Append fetched data to existing data
      setPage(pageNumber); // Update current page number
      setHasMoreData(get.next !== null); // Check if there is more data available
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPost(page);
  }, []); // Fetch initial data only once when component mounts

  const loadMore = () => {
    const nextPage = page + 1; // Increment page number
    fetchPost(nextPage);
  };

  return { data, hasMoreData, loadMore };
};
