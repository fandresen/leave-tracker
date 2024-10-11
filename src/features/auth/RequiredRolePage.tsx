import { getRole } from "@/lib/token&RoleService";
import { Navigate, Outlet } from "react-router-dom";

interface propsT {
    requiredRole: "ADMIN"|"USER"|"SUP_USER"|"CHEF_DEP";
}

const RequiredRolePages = ({ requiredRole}: propsT) => {
    const userRole = getRole();
  {
    return requiredRole == userRole?<Outlet /> : <Navigate to="/" />;
  }
};
export default  RequiredRolePages;

