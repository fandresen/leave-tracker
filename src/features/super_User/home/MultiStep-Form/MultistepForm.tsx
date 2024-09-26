import { useState } from "react";
import StepOne from "./StepOne";
import StepIndicator from "./StepIndicator";
import NavigationButtons from "./NavigationButtons";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import {
  createEntrepriseT,
  formDatacreatetionEntreprise,
} from "@/lib/interface";
import { useNavigate } from "react-router-dom";

interface propsT {
  handlecreate: (data: createEntrepriseT) => Promise<boolean>;
}
export default function MultiStepForm({ handlecreate }: propsT) {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState<boolean | undefined>(undefined);
  const [formData, setFormData] = useState<formDatacreatetionEntreprise>({
    companyName: "",
    email: "",
    address: "",
    phone: "",
    licenseType: "",
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
    const data: createEntrepriseT = {
      entreprise: {
        name: formData.companyName,
      },
      admin: {
        email: formData.email,
        password: "",
        address: formData.address,
        phone_number: formData.phone,
        first_name: formData.companyName,
        last_name: formData.companyName,
      },
    };
    handlecreate(data).then((value)=>{
      setError(value);
      value?navigate("/$uperU&er"):setCurrentStep(1);
    });
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
        Creér un nouveau Compte d'entreprise
      </h1>
      <div className="w-full lg:max-w-[50vw] 2xl:max-w-[40vw] mx-auto lg:mt-6 2xl:px-12 2xl:py-10 bg-white">
        <StepIndicator currentStep={currentStep} />

        {currentStep === 1 && (
          <StepOne formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 2 && (
          <StepTwo formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 3 && (
          <StepThree formData={formData} handleChange={handleChange} />
        )}

        <NavigationButtons
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
          handleSubmit={() => handleSubmit()}
        />
      </div>
    </>
  );
}
