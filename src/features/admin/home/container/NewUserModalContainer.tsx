import { FormEvent, useState } from "react";
import NewUserModal from "../presentation/NewUserModal";
import { UserT } from "@/lib/interface";
import { useHomeContext } from "../../Context/HomeContext";
import { useAxiosWithToken } from "@/lib/interceptor";

export default function NewUserModalContainer() {
    const [data,setData] = useState<UserT>(
        {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            role: "USER", // Set the role directly here
            address: "",
            departement_id: 0,
            password: "",
            picture: undefined,
            in_Conger: false
        }
    )
    const {closeUserModal}= useHomeContext();

    const axios = useAxiosWithToken()

    const handleChange=(e: React.ChangeEvent<any>)=>{
        setData({...data!,[e.target.name]:e.target.value})
    }
    const handleSubmit= async (e:FormEvent)=>{
        e.preventDefault();
        if(data){
            try {
                const response = await axios.post("/users", data)
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        }
        else{
            console.log("données manquantes")
        }
        closeUserModal();
    }

  return (
    <div>
        <NewUserModal handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}
