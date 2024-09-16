import { useAxiosNormal } from "@/lib/interceptor"
import { ChangeEvent, FormEvent, useState } from "react";
import { toast, ToastOptions } from "react-toastify";

export default function useHandleForgotPassword() {
    const [email, setEmail] = useState("")
    const axios = useAxiosNormal();


    //Toast Parameters
    const customOptions: ToastOptions = {
        position: 'top-center',
        className:"top-[8vh] w-[22] 2xl:w-[15vw] 2xl:min-h-[8vh] 2xl:text-xl font-semibold",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      };

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }

    const handleSubmit=async (e:FormEvent)=>{
        e.preventDefault();
        try{
            const response = await axios.post("/forgotPassword", {"email":email});
            console.log(response);
            toast.success("Email envoyé",customOptions);
        }
        catch(error){
            toast.error("Pas de compte lié a cette email",customOptions);
            console.log(error)
        }
        setEmail("");
    }
  return {handleChange,handleSubmit,email}
}
