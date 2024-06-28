import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/authSlice";



export default function useHandleLogin() {
  const [userName, setUserName] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleChange = (value: string | undefined, id: string) => {
    if (id === "username") {
      setUserName(value);
      console.log(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userName, password);
    sendLoginData(userName, password)
    
  };

  const sendLoginData = async (userName?: string, password?: string)=>{
    try{
      const res = await axios.post('http://localhost:3000/login', { 'username':userName, 'password':password})

      if(res.status === 200) {
        // add toast notification with success message
        toast.success('Logged in successfully')
        console.log(res); 
        // navigate to home page
        dispatch(setToken({accessToken:res.data.token}))
        navigate("/")
    }
    else{
      // add toast notification with error message
      toast.error('Invalid credentials')

      }
    }
    catch(err){
      console.error(err);
      // add toast notification with error message
      toast.error('Error when connecting to DB')
    }
  }

  return {userName, password, handleChange, handleSubmit };
}
