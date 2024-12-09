
import { clearToken } from "@/lib/token&RoleService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const logOut = () => {
    clearToken();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return { logOut };
}
