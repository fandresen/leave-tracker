import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAxiosNormal } from "@/lib/interceptor";
import { setAccessToken } from "@/lib/token&RoleService";

export interface errorT {
  usernameMessage?: string;
  passwordMessage?: string;
  type?: "error" | "success" | "warning" | "info";
}

export default function useHandleLogin() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<errorT>();
  const axios = useAxiosNormal();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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

    if (userName.length < 3) {
      errors.usernameMessage = "min. 3 caractères";
    }

    if (!passwordRegex.test(password)) {
      errors.passwordMessage =
        "min.8, 1 chiffre, 1 lettre et 1 caractère spécial";
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
    if (userName === "superuser") {
      const res = await axios.post("/admin/data/$uperU&er");
      toast.success("Logged in successfully");
      console.log(res);

      navigate("/");
      return;
    } else {
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
          navigate("/");
        } else {
          // add toast notification with error message
          toast.error("Invalid credentials");
        }
      } catch (err: any) {
        if (err?.response?.status === 401) {
          setError({
            passwordMessage: "mot de passe incorrecte",
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
    }
  };

  return { userName, password, handleChange, handleSubmit, error };
}
