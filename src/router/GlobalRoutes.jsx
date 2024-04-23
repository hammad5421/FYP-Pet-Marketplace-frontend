import { Navigate } from "react-router-dom";
import Routes from "./Routes";
import { keys } from "../common";

const GlobalRoutes = ({ children }) => {
  const token = localStorage.getItem(keys.qaswa_user);

  if (token) return <Navigate to={Routes.home} />;

  return children;
};

export default GlobalRoutes;
