import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAxiosNormal } from "@/lib/interceptor";
import { getRole, setAccessToken } from "@/lib/token&RoleService";
import { emailRegex } from "@/lib/others";

export interface errorT {
  usernameMessage?: string;
  passwordMessage?: string;
  type?: "error" | "success" | "warning" | "info";
}

export default function useHandleLogin() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading,setLoading]=useState<boolean>(false);
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
      console.log(value);
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
    setLoading(true);
    try {
      const res = await axios.post("/login", {
        email: userName,
        password: password,
      });

      if (res.status === 200) {
        // add toast notification with success message
        toast.success("Logged in successfully");
        console.log(res);
        // save access token to local storage
        setAccessToken(res.data.accessToken);
        // navigate to home page
        const role = getRole();
        if (role == "ADMIN") {
          navigate("/admin");
        } else if (role == "USER") {
          navigate("/");
        }
        else if (role == "CHEF_DEP") {
          navigate("/chef-dep");
        }
      } else {
        // add toast notification with error message
        toast.error("Invalid credentials");
      }
    } catch (err: any) {
      if (
        err?.response?.status === 401 &&
        err?.response?.data === "Email or password is incorrect"
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
    finally{
      setLoading(false);
    }
  };

  return { userName, password, handleChange, handleSubmit, error,loading };
}
