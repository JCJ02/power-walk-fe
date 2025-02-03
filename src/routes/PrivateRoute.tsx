import { Navigate, Outlet } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const PrivateRoute = () => {
  const token = useAuthentication();
  return token ? <Outlet /> : <Navigate to="/log-in" />;
};

export default PrivateRoute;
