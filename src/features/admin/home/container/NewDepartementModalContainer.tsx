import { FormEvent, useState } from "react";
import NewDepartementModal from "../presentation/NewDepartementModal";
import { useAxiosWithToken } from "@/lib/interceptor";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useHomeContext } from "../../Context/HomeContext";

export default function NewDepartementModalContainer() {
  const { toast } = useToast();
  const axios = useAxiosWithToken();

  const [data, setData] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const { closeDepartmentModal } = useHomeContext();


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (data!.length > 2) {
      try {
        const response = await axios.post("/departement", { name: data });
        console.log(response);
        if (response.status === 200) {
          toast({
            variant: "destructive",
            description: "Departement created successfully",
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
    else{
        toast({
          variant: "destructive",
          description: "Le nom du département doit faire au moins 3 caractères",
        });
  
    }
    closeDepartmentModal();
  };

  return (
    <div>
      <Toaster />
      <NewDepartementModal
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}
