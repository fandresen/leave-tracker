import { getRole } from "@/lib/token&RoleService";
import { Navigate, Outlet } from "react-router-dom";

interface propsT {
    requiredRole: "AMDIN"|"USER"|"SUP_USER"|"DEP_CHEF";
}

const RequiredRoleComponent = ({ requiredRole}: propsT) => {
    const userRole = getRole();
  {
    return requiredRole == userRole ? <Outlet /> : <Navigate to="login" />;
  }
};
export default RequiredRoleComponent;

