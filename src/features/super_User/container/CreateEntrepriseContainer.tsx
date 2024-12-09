import { createEntrepriseT } from "@/lib/interface";
import { useAxiosWithToken } from "@/lib/interceptor";
import MultiStepForm from "../home/MultiStep-Form/MultistepForm";
import Loading from "@/components/ui/Loading";
import { useState } from "react";

export default function CreateEntrepriseContainer() {
  const axios = useAxiosWithToken();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: createEntrepriseT):Promise<boolean> => {
    setLoading(true);
    try {
      const res = await axios.post("/entreprise", data);
      if (res.status === 200) {
        console.log("Entreprise created successfully");
        return true;
      } else {
        return false;
        console.log("Error creating entreprise");
      }
    } catch (e) {
      console.error("Error creating entreprise", e);
      return false; // stop further execution if error occurs.
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
     <Loading loading={loading}/>
      <MultiStepForm handlecreate={handleSubmit} />
    </>
  );
}
