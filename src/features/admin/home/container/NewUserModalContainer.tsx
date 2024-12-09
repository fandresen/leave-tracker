import { useAxiosWithToken } from "@/lib/interceptor";
import { UserT } from "@/lib/interface";
import MultiStepFormUser from "../../CreateUser/MultiStep-Form/MultistepFormUser";
import { useState } from "react";
import Loading from "@/components/ui/Loading";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function NewUserModalContainer() {
    
    const   [loading,setLoading] = useState<boolean>(false);

    const axios = useAxiosWithToken()

    const navigate = useNavigate();

    const handleSubmit = async (data:UserT):Promise<boolean> => {
        if(data){
            setLoading(true); 
            try {
                const response = await axios.post("/users", data)
                console.log(response)
                return true;
            } catch (error) {
                console.error(error)
                return false;
            }
            finally{
                setLoading(false);
            }
        }
        else{
            console.log("données manquantes")
            return false;
        }
    }

  return (
    <div>
        <Loading loading={loading}/>
        <IoArrowBackCircleOutline onClick={()=>navigate("/admin")} className=" w-12 h-12 2xl:w-14 2xl:h-14 text-gray-700 absolute left-24 2xl:left-36 top-12 2xl:top-16 cursor-pointer hover:text-sky-600" />
        <MultiStepFormUser handlecreate={handleSubmit}/>
    </div>
  )
}
