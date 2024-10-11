import { useAxiosNormal } from "@/lib/interceptor";
import { customOptions } from "@/lib/others";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast} from "react-toastify";

export default function useHandleForgotPassword() {
  const [email, setEmail] = useState("");
  const [noAcount, setNoAucount] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const Axios = useAxiosNormal();



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    noAcount ? setNoAucount(false) : "";
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.post("/forgotPassword", { email: email });
      if (response.status === 200) {
        toast.success("Email envoyé", customOptions);
        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setNoAucount(true);
        } else {
          toast.error(
            "Nous avons rencontré une erreur , Veulliez réessayer",
            customOptions
          );
        }
      }
    } finally {
      setLoading(false);
    }
    
    
  };
  return { handleChange, handleSubmit, email, noAcount, loading };
}
