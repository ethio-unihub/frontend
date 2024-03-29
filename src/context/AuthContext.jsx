import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setauthTokens] = useState(null);
  const [user, setUser] = useState(null);

  let loginUser = async (e) => {
    let response = await fetch()
  };

  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
