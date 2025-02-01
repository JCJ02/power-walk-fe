import { Navigate, Outlet } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated === false) {
    return <Navigate to="/log-in" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
