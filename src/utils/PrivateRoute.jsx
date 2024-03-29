import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  const authenticated = false;

  return authenticated ? <Component /> : <Navigate to="/login" />;
};
