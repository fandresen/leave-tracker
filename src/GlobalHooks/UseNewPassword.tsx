import { errorT } from "@/features/super_User/login/UseHandleLoginSuperUser";
import { useAxiosNormal } from "@/lib/interceptor";
import { passwordRegex } from "@/lib/others";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastOptions } from "react-toastify";

export default function UseNewPassword() {
  const [psswd, setPasswd] = useState<string>("");
  const [confirmPsswd, setConfirmPsswd] = useState<string>();
  const [errorPsswd, setErrorPsswd] = useState<errorT>();
  const [errorNotMatch, setErrorNotMatch] = useState<errorT>();
  const [params, setParams] = useState<string | null>();
  const [loading,setLoading] = useState<boolean>(false);

  const axios1 = useAxiosNormal();
  const navigate = useNavigate();

  //Toast Parameters
  const customOptions: ToastOptions = {
    position: "top-center",
    className:"top-[8vh] text-center w-[36] 2xl:w-[15vw] 2xl:min-h-[8vh] lg:text-sm 2xl:text-sm font-semibold",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tkn = searchParams.get("tkn");
    setParams(tkn);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!passwordRegex.test(e.target.value)) {
      setErrorPsswd({
        type: "error",
        passwordMessage: "Au moins 8 caractères, avec lettre, chiffre et symbole",
      });
    } else {
      setErrorPsswd({ type: "success" });
    }
    setPasswd(e.target.value);
  };

  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPsswd(e.target.value);
    if (psswd !== e.target.value) {
      setErrorNotMatch({
        type: "error",
        passwordMessage: "Les mots de passe ne sont pas identiques",
      });
    } else {
      setErrorNotMatch({ type: "success" });
    }
  };



  const sendData = async (password: string) => {
    setLoading(true);
    try {
      const response = await axios1.post(`/createPassword?tkn=${params}`, {
        password: password,
      });
      if (response.status === 200) {
        toast.success("Mot de passe créé avec succès", customOptions);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data == "token expired") {
          toast.error("La session a expiré, Veuillez réessayer", customOptions);
        } else {
          toast.error(
            "Une erreur c'est produite, Veuillez réessayer",
            customOptions
          );
        }
      }
    }
    finally{
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (errorPsswd!.type === "error" || errorNotMatch!.type === "error") {
      console.log("testeo");
    } else {
      try {
        sendData(psswd);
      } catch (e) {
        console.log("error");
        setPasswd("");
        setConfirmPsswd("");
        setErrorPsswd({ type: "success" });
        setErrorNotMatch({ type: "success" });
        navigate("/login");
      }
      setPasswd("");
      setConfirmPsswd("");
    }
  };

  return {
    handleChange,
    handleConfirmChange,
    handleSubmit,
    errorPsswd,
    errorNotMatch,
    psswd,
    confirmPsswd,
    loading
  };
}
