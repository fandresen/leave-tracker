import { useState } from "react";
import { UserT } from "@/lib/interface";
import { useNavigate } from "react-router-dom";
import StepIndicatorUser from "./StepIndicatorDepartement";
import StepOneUser from "./StepOneDepartement";
import StepTwoUser from "./Step2Departement";
import StepThreeUser from "./Step3Departeùent";
import NavigationButtonsUser from "./NavigationButtonsDepartement";

interface propsT {
  handlecreate: (data: UserT, departement_name: string) => Promise<boolean>;
}

interface fomDataT {
  departement_name: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  picture: any;
  in_Conger: boolean;
  address: string;
  id: number;
  password: string;
  role: "USER" | "DEP_CHEF";
}
export default function MultiStepFormDepartement({ handlecreate }: propsT) {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState<boolean | undefined>(undefined);
  const [formData, setFormData] = useState<fomDataT>({
    departement_name: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    picture: undefined,
    in_Conger: false,
    address: "",
    id: 0,
    password: "",
    role: "USER",
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    handlecreate(
      {
        departement_id: 0,
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        picture: formData.picture,
        in_Conger: formData.in_Conger,
        address: formData.address,
        password: formData.password,
        role: formData.role,
      },
      formData.departement_name
    ).then((value) => {
      setError(value);
      value ? navigate("/admin") : setCurrentStep(1);
    });
    setError(undefined);
  };

  return (
    <>
      {error == false ? (
        <div
          id="errorMessage"
          className="fixed z-50 top-0 left-[35vw] transform -translate-x-1/2 mt-4 bg-red-500 text-white py-2 px-4 rounded-md shadow-md animate-slide-in-out"
        >
          <p className="text-sm 2xl:text-lg">
            Erreur: Une erreur s'est produite. Veuillez réessayer.
          </p>
        </div>
      ) : error ? (
        <div
          id="errorMessage"
          className="fixed z-50 top-0 left-[35vw] transform -translate-x-1/2 mt-4 bg-green-400 text-white py-2 px-4 rounded-md shadow-md animate-slide-in-out"
        >
          <p className="text-sm 2xl:text-lg">Departement crée avec Succes</p>
        </div>
      ) : (
        ""
      )}

      <h1 className="text-center lg:text-2xl 2xl:text-4xl roboto roboto-medium text-[#333] lg:-mt-10 2xl:-mt-0">
        Creér un Departement
      </h1>
      <div className="w-full lg:max-w-[50vw] 2xl:max-w-[40vw] mx-auto lg:mt-6 2xl:px-12 2xl:py-10 bg-white">
        <StepIndicatorUser currentStep={currentStep} />

        {currentStep === 1 && (
          <StepOneUser formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 2 && (
          <StepTwoUser formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 3 && (
          <StepThreeUser formData={formData} handleChange={handleChange} />
        )}

        <NavigationButtonsUser
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleSubmit={() => handleSubmit()}
        />
      </div>
    </>
  );
}
