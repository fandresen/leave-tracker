//On peut pas acceder au enfants de cet composant si on est authentifier

import { getAccessToken } from "@/lib/token&RoleService";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function RequireNotAuth() {
  const navigate = useNavigate();
  const accessToken = getAccessToken();

  // Redirect to home if user is already authenticated
  useEffect(() => {
    if (accessToken !== "") {
      navigate("/");
    }
    
  });
  return <Outlet />;
}
