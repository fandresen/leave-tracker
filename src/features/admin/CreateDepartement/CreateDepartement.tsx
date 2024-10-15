import { CreationDepartmentDTO } from "@/lib/interface";
import MultiStepFormDepartement from "./MultiStep-Form/MultistepFormDepartement";
import { useAxiosWithToken } from "@/lib/interceptor";

export default function CreateDepartement() {
  const axios = useAxiosWithToken();
  const handleSubmit = async (data: CreationDepartmentDTO): Promise<boolean> => {
    if (data) {
      try {
        const response = await axios.post("/departement", data);
        console.log(response);
        if(response.status === 200){
          return true;
        }
        else return false;
        
      } catch (error) {
        console.error(error);
        return false;
      }
    } else {
      console.log("données manquantes");
      return false;
    }
  };
  return (
    <>
      <div className="bg-white  lg:-mt-5 2xl:mt-10 lg:py-10 2xl:pt-10 w-[55%] 2xl:w-[50%] px-10 2xl:px-0 mx-auto border-2 border-gray-50 shadow-2xl rounded-lg">
        <MultiStepFormDepartement handlecreate={handleSubmit} />
      </div>
    </>
  );
}
