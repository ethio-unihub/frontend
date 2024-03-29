import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "./MesssageContext";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setauthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);

  const { addMessage } = useContext(MessageContext);

  const navigate = useNavigate();

  let loginUser = async (e) => {
    let response = await fetch(`${backendUrl}auth/jwt/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setauthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      addMessage({ type: "success", text: "Logged in successfully" });
      navigate("/");
    } else {
      addMessage({ type: "error", text: "Invalid Credentials" })
    }
  };

  let logoutUser = () => {
    setUser(null);
    setauthTokens(null);
    localStorage.removeItem("authToken");
    addMessage({ type: "success", text: "Logged out successfully" });
    navigate("/login");
  };

  let updateToken = async () => {
    let response = await fetch(`${backendUrl}auth/jwt/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    });

    let data = await response.json();
    if (response.status === 200) {
      setauthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
    if (loading) {
      setLoading(false);
    }
  };

  const value = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourMin = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMin);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
