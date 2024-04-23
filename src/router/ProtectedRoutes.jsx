import { Navigate } from "react-router-dom";
import Routes from "./Routes";
import { keys } from "../common";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem(keys.qaswa_user);

  if (token) return children;

  return <Navigate to={Routes.customer_sign_in} />;
};

export default ProtectedRoutes;
