import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken } from "@/lib/token&RoleService";
import LoginForm from "@/features/auth/login/components/LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const accessToken = getAccessToken();

  // Redirect to home if user is already authenticated
  useEffect(() => {
    if (accessToken !== "") {
      navigate("/");
    }
  });

  return (
    <>
      <div className="bg--[#ffffff] w-full h-[100vh] absolute top-0">
      <div className="w-full h-[45vh] bg-gradient-to-b from-[#79C1FF] to-[#ffffff] absolute top-0 z-0"></div>
        <LoginForm />
      </div>
    </>
  );
}
