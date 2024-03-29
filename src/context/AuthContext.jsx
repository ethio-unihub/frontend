import { createContext, useState, useEffect } from "react";
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setauthTokens] = useState(null);
  const [user, setUser] = useState(null);

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
    let data = response.json();
    if (response.status === 200) {
      setauthTokens(data);
    } else {
      alert("Invalid credentials");
    }
  };

  const value = {
    loginUser: loginUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
