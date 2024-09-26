import { useState } from "react";
import {
  UserT,
} from "@/lib/interface";
import { useNavigate } from "react-router-dom";
import StepIndicatorUser from "./StepIndicatorUser";
import StepOneUser from "./StepOneUser";
import StepTwoUser from "./Step2User";
import StepThreeUser from "./Step3User";
import NavigationButtonsUser from "./NavigationButtonsUser";

interface propsT {
  handlecreate: (data: UserT) => Promise<boolean>;
}
export default function MultiStepFormUser({ handlecreate }: propsT) {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState<boolean | undefined>(undefined);
  const [formData, setFormData] = useState<UserT>({
    departement_id:0,
    email:"",
    first_name:"",
    last_name:"",
    phone_number:"",
    picture: undefined,
    in_Conger: false,
    address:"",
    id:0,
    password:"",
    role:"USER"
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
    handlecreate(formData).then((value)=>{
      setError(value);
      value?navigate("/home"):setCurrentStep(1);
    });
    setError(undefined);
  };

  return (
    <>
      {error ==false ? (
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
          <p className="text-sm 2xl:text-lg">Entreprise crée avec Succes</p>
        </div>
      ) : (
        ""
      )}
      
      <h1 className="text-center lg:text-2xl 2xl:text-4xl roboto roboto-medium text-[#333] lg:-mt-10 2xl:-mt-0">
        Creér un nouveau Compte d'Utilisateur
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
