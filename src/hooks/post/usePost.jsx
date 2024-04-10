import { useContext, useState } from "react";
import { AuthContext, MessageContext } from "../../context";

export const usePost = (data, backendUrl) => {
  const { myprofile } = useContext(AuthContext);
  const [authTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const { addMessage } = useContext(MessageContext);
  const token = authTokens.access;

  let upvote = async () => {
    try {
      let response = await Promise.race([
        fetch(`${backendUrl}api/posts/${data.id}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Alpha ${token}`,
          },
          body: JSON.stringify({
            upvote: [...data.upvote, myprofile.id],
          }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000)
        ),
      ]);

      let responseData = await response.json(); // Renamed 'data' to 'responseData'

      if (response.status === 200) {
        addMessage({ type: "success", text: "question upvoted" });
        data.upvote = responseData.upvote;
      } else {
        addMessage({ type: "error", text: "Invalid Credentials" });
      }
    } catch (error) {
      addMessage({ type: "error", text: error.message });
    }
  };

  return { upvote };
};
