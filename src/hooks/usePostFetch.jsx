import { useEffect, useState } from "react";

export const usePostFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Start page number from 0
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchData = async (page) => {
    try {
      const response = await fetch(`${url}?page=${page}`);
      const responseData = await response.json();
      if (responseData.results && Array.isArray(responseData.results)) {
        if (page === 0) {
          setData(responseData.results);
        } else {
          setData((prevData) => [...prevData, ...responseData.results]);
        }
        setPage((prevPage) => prevPage + 1);
        setHasMoreData(responseData.results.length > 0);
      } else {
        console.error("No results found in the response data.");
        setHasMoreData(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [url, page]);

  const loadMore = () => {
    setLoading(true);
    fetchData(page);
  };

  return { data, loading, hasMoreData, loadMore };
};
