import { getRole } from "@/lib/token&RoleService";
import { Navigate, Outlet } from "react-router-dom";

const RequiredAuth = () => {
  const role = getRole();

  return role != "" ? <Outlet /> : <Navigate to="login" />;
};
export default RequiredAuth;
