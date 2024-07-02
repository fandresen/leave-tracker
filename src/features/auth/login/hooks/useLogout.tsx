import { clearToken } from "@/lib/tokenService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const logOut = () => {
    clearToken();
    navigate("/login");
  };
  return { logOut };
}
