import { getAccessToken } from "@/lib/token&RoleService";
import { Navigate, Outlet } from "react-router-dom";

const RequiredAuth = () => {
  const accessToken = getAccessToken();

  return accessToken != "" ? <Outlet /> : <Navigate to="login" />;
};
export default RequiredAuth;
