import { UserT } from "@/lib/interface";
import MultiStepFormDepartement from "./MultiStep-Form/MultistepFormDepartement";
import { useAxiosWithToken } from "@/lib/interceptor";

export default function CreateDepartement() {
  const axios = useAxiosWithToken()
  const handleSubmit = async (data:UserT):Promise<boolean> => {
    if(data){
        try {
            const response = await axios.post("/users", data)
            console.log(response)
            return true;
        } catch (error) {
            console.error(error)
            return false;
        }
    }
    else{
        console.log("données manquantes")
        return false;
    }
}
  return (
    <>
    <MultiStepFormDepartement handlecreate={handleSubmit}/>
    </>
  )
}
