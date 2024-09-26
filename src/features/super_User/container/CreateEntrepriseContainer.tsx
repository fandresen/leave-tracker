import { createEntrepriseT } from "@/lib/interface";
import { useAxiosWithToken } from "@/lib/interceptor";
import MultiStepForm from "../home/MultiStep-Form/MultistepForm";

export default function CreateEntrepriseContainer() {
  const axios = useAxiosWithToken();

  // const [entrepriseData, setEntrepriseData] = useState<EntrepriseT>({
  //   name: "",
  // });
  // const [adminData, setAdminData] = useState<AdminT>({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   address: "",
  //   password: "",
  //   phone_number: "",
  // });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   switch (e.target.id) {
  //     case "EName":
  //       setEntrepriseData({...entrepriseData, name: e.target.value });
  //       break;
  //     case "email":
  //       setAdminData({ ...adminData, email: e.target.value });
  //       break;
  //     case "first_name":
  //       setAdminData({ ...adminData, first_name: e.target.value });
  //       break;
  //     case "last_name":
  //       setAdminData({ ...adminData, last_name: e.target.value });
  //       break;
  //     case "address":
  //       setAdminData({ ...adminData, address: e.target.value });
  //       break;
  //     case "password":
  //       setAdminData({ ...adminData, password: e.target.value });
  //       break;
  //     case "phone_number":
  //       setAdminData({ ...adminData, phone_number: e.target.value });
  //       break;
  //   }
  // };

  const handleSubmit = async (data: createEntrepriseT):Promise<boolean> => {
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
  };

  return (
    <>
      <MultiStepForm handlecreate={handleSubmit} />
    </>
  );
}
