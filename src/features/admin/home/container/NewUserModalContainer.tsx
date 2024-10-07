import { useAxiosWithToken } from "@/lib/interceptor";
import { UserT } from "@/lib/interface";
import { useHomeContext } from "../../Context/HomeContext";
import MultiStepFormUser from "../../CreateUser/MultiStep-Form/MultistepFormUser";

export default function NewUserModalContainer() {
    
    const {closeUserModal}= useHomeContext();

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
        closeUserModal();
    }

  return (
    <div>
        <MultiStepFormUser handlecreate={handleSubmit}/>
    </div>
  )
}
