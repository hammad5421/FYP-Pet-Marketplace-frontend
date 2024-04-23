import { useContext } from "react";

import { AuthContext } from "../context";
import { keys } from "../common";

const useAuth = () => {
  const { setToken, token, setCurrentUser } = useContext(AuthContext);

  const initializeUser = (jwt) => {
    localStorage.setItem(keys.qaswa_user, JSON.stringify(jwt));
    setToken(jwt);
  };

  return { initializeUser, token, setToken };
};

export default useAuth;
