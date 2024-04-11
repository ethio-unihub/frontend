import { useEffect, useState } from "react";

export const usePostDetail = (slug, backendUrl) => {
  const [post, setPost] = useState(null); // Initialize as null

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${backendUrl}api/posts/?search=${slug}`);
        const responseData = await response.json();

        if (response.ok) {
          if (responseData.results.length > 0) {
            setPost(responseData.results[0]); // Assuming the first item is the post detail
          } else {
            console.log({ type: "error", text: "Post not found" });
          }
        } else {
          console.log({ type: "error", text: "Failed to fetch post details" });
        }
      } catch (error) {
        console.log({ type: "error", text: error.message });
      }
    };

    fetchPost();

    return () => {
      // Cleanup function if needed
    };
  }, [slug, backendUrl]); // Include backendUrl in the dependency array

  return { post };
};
