import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAxiosNormal } from "@/lib/interceptor";
import { setAccessToken, setRoleSU } from "@/lib/token&RoleService";
import { emailRegex } from "@/lib/others";

export interface errorT {
  usernameMessage?: string;
  passwordMessage?: string;
  type?: "error" | "success" | "warning" | "info";
}

export default function useHandleLoginSuperUser() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<errorT>();
  const axios = useAxiosNormal();

  const navigate = useNavigate();

  const handleChange = (value: string, id: string) => {
    //Remetre error en false quand on tappe
    if (error) {
      setError({ type: "success" });
    }
    if (id === "username") {
      setUserName(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!emailRegex.test(userName)) {
      errors.usernameMessage = "Saisissez une adresse email valide.";
    }

    if (password.length < 2) {
      errors.passwordMessage = "Saisissez un mot de passe";
    }

    if (Object.keys(errors).length > 0) {
      setError({
        ...errors,
        type: "error",
      });
    } else {
      loginUser(userName, password);
      // setUserName("");
      setPassword("");
    }
  };

  const loginUser = async (userName?: string, password?: string) => {
    try {
      const res = await axios.post("/superuser/login", {
        email: userName,
        password: password,
      });

      if (res.status === 200) {
        // add toast notification with success message
        toast.success("Logged in successfully");
        console.log(res);
        // save access token to local storage
        setAccessToken(res.data.accessToken);
        setRoleSU(res.data.accessToken);
        // navigate to home page
        navigate("/$uperU&er");
      } else {
        // add toast notification with error message
        toast.error("Invalid credentials");
      }
    } catch (err: any) {
      if (
        err?.response?.status === 401 &&
        err?.response?.data === "Password is incorrect"
      ) {
        setError({
          passwordMessage: "mot de passe incorrecte",
          type: "error",
        });
      } else if (
        err?.response?.status === 401 &&
        err?.response?.data === "User doesn't exist"
      ) {
        setError({
          usernameMessage: "Aucun utilisateur trouvé avec cette adresse email",
          type: "error",
        });
      } // add toast notification with error message
      else {
        toast.error("Une erreur c'est produite, Veuillez reéssayer");
        console.log(err);
        setUserName("");
        setPassword("");
      }
    }
  };

  return { userName, password, handleChange, handleSubmit, error };
}
