import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "@/lib/tokenService";
import { useAxiosNormal } from "@/lib/interceptor";

export interface errorT{
  usernameMessage?: string;
  passwordMessage?: string;
  type?: "error" | "success" | "warning" | "info";
}

export default function useHandleLogin() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<errorT>();
  const axios = useAxiosNormal();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const navigate = useNavigate();

  const handleChange = (value: string, id: string) => {
    //Remetre error en false quand on tappe
    if (error) {
      setError({type:'success'})
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
    setUserName("");
    setPassword("");
    if(userName.length > 3 && passwordRegex.test(password)){
      sendLoginData(userName, password);
    }
    else {
       setError({passwordMessage:"Le mot de passe doit inclure un chiffre et un caractère spécial",type:'error'})
    }
  
  };

  const sendLoginData = async (userName?: string, password?: string) => {
    try {
      const res = await axios.post("/login", {
        username: userName,
        password: password,
      });

      if (res.status === 200) {
        // add toast notification with success message
        toast.success("Logged in successfully");
        console.log(res);
        // save access token to local storage
        setAccessToken(res.data.token);
        // navigate to home page
        navigate("/");
      } else {
        // add toast notification with error message
        toast.error("Invalid credentials");
      }
    } catch (err: any) {
      if (err?.response?.status === 401) {
        setError({passwordMessage:"mot de passe incorrecte",type:'error'})
      }
      else  // add toast notification with error message
      {
        toast.error("Une erreur c'est produite, Veuillez reéssayer");
      }
     
      
    }
  };

  return { userName, password, handleChange, handleSubmit, error };
}
