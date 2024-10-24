import { useAxiosWithToken } from "@/lib/interceptor";
import { UserT } from "@/lib/interface";
import MultiStepFormUser from "../../CreateUser/MultiStep-Form/MultistepFormUser";
import { useState } from "react";
import Loading from "@/components/ui/Loading";

export default function NewUserModalContainer() {
    
    const   [loading,setLoading] = useState<boolean>(false);

    const axios = useAxiosWithToken()

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
        <MultiStepFormUser handlecreate={handleSubmit}/>
    </div>
  )
}
