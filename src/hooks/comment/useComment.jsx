import { useContext, useState } from "react";
import { AuthContext, MessageContext } from "../../context";

export const useComment = (id, backendUrl) => {
  const { myprofile } = useContext(AuthContext);
  const [authTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const { addMessage } = useContext(MessageContext);
  const token = authTokens.access;

  let add = async (content) => {
    try {
      let response = await Promise.race([
        fetch(`${backendUrl}api/posts/${id}/comments/create/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Alpha ${token}`,
          },
          body: JSON.stringify({
            content: content,
          }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000)
        ),
      ]);

      if (response.status === 201) {
        addMessage({ type: "success", text: "Answer Posted" });
      } else {
        addMessage({ type: "error", text: "Invalid Credentials" });
      }
    } catch (error) {
      addMessage({ type: "error", text: error.message });
    }
  };
  let clear = async () => {
    try {
      let response = await Promise.race([
        fetch(`${backendUrl}api/posts/${data.id}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Alpha ${token}`,
          },
          body: JSON.stringify({
            upvote: data.upvote.filter((item) => item !== myprofile.id),
            downvote: data.downvote.filter((item) => item !== myprofile.id),
          }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000)
        ),
      ]);

      let responseData = await response.json(); // Renamed 'data' to 'responseData'

      if (response.status === 200) {
        console.log(responseData);
        addMessage({ type: "success", text: "vote cleared" });
        data.upvote = data.upvote.filter((item) => item !== myprofile.id);
        data.downvote = data.downvote.filter((item) => item !== myprofile.id);
      } else {
        addMessage({ type: "error", text: "Invalid Credentials" });
      }
    } catch (error) {
      addMessage({ type: "error", text: error.message });
    }
  };

  let downvote = async () => {
    try {
      let response = await Promise.race([
        fetch(`${backendUrl}api/posts/${data.id}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Alpha ${token}`,
          },
          body: JSON.stringify({
            downvote: [...data.downvote, myprofile.id],
            upvote: data.upvote.filter((item) => item !== myprofile.id),
          }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000)
        ),
      ]);

      let responseData = await response.json(); // Renamed 'data' to 'responseData'

      if (response.status === 200) {
        addMessage({ type: "success", text: "question downvoted" });
        data.downvote = responseData.downvote;
        data.upvote = data.upvote.filter((item) => item !== myprofile.id);
      } else {
        addMessage({ type: "error", text: "Invalid Credentials" });
      }
    } catch (error) {
      addMessage({ type: "error", text: error.message });
    }
  };

  let save = async () => {
    try {
      let response = await Promise.race([
        fetch(`${backendUrl}api/posts/${data.id}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Alpha ${token}`,
          },
          body: JSON.stringify({
            saves:
              data.saves.indexOf(myprofile.id) !== -1
                ? data.saves.filter((item) => item !== myprofile.id)
                : [...data.saves, myprofile.id],
          }),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), 20000)
        ),
      ]);

      let responseData = await response.json(); // Renamed 'data' to 'responseData'

      if (response.status === 200) {
        addMessage({
          type: "success",
          text:
            data.saves.indexOf(myprofile.id) !== -1
              ? "question unsaved"
              : "question saved",
        });
        data.saves = responseData.saves;
      } else {
        addMessage({ type: "error", text: "Invalid Credentials" });
      }
    } catch (error) {
      addMessage({ type: "error", text: error.message });
    }
  };

  return { add };
};
