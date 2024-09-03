import React, { ChangeEvent, FormEvent, useState } from "react";
import { CreateEntreprise } from "../presentation/CreateEntreprise";
import { AdminT, createEntrepriseT, EntrepriseT } from "@/lib/interface";
import { useAxiosWithToken } from "@/lib/interceptor";

export default function CreateEntrepriseContainer() {

  const axios = useAxiosWithToken()

  const [entrepriseData, setEntrepriseData] = useState<EntrepriseT>({
    name: "",
  });
  const [adminData, setAdminData] = useState<AdminT>({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "EName":
        setEntrepriseData({...entrepriseData, name: e.target.value });
        break;
      case "email":
        setAdminData({ ...adminData, email: e.target.value });
        break;
      case "first_name":
        setAdminData({ ...adminData, first_name: e.target.value });
        break;
      case "last_name":
        setAdminData({ ...adminData, last_name: e.target.value });
        break;
      case "address":
        setAdminData({ ...adminData, address: e.target.value });
        break;
      case "password":
        setAdminData({ ...adminData, password: e.target.value });
        break;
      case "phone_number":
        setAdminData({ ...adminData, phone_number: e.target.value });
        break;
    }
  };

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    // API call to create the entreprise and admin
    e.preventDefault()
    const completeData:createEntrepriseT = {
      admin:adminData,
      entreprise: entrepriseData
    } 
    try{
        const res = await axios.post("/entreprise",completeData)
        if (res.status === 200) {
        console.log("Entreprise created successfully")
        } else {
      console.log("Error creating entreprise")
    }
    }
    catch(e){
      console.error("Error creating entreprise", e)
      return  // stop further execution if error occurs.
    }
  };

  return (
    <>
      <CreateEntreprise handleChange={handleChange} handleFormSubmit={handleSubmit}/>
    </>
  );
}
