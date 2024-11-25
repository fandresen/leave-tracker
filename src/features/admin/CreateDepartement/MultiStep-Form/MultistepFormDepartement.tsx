import { useState } from "react";
import { CreationDepartementT, CreationDepartmentDTO } from "@/lib/interface";
import { useNavigate } from "react-router-dom";
import StepIndicatorUser from "./StepIndicatorDepartement";
import StepOneUser from "./StepOneDepartement";
import StepTwoUser from "./Step2Departement";
import NavigationButtonsUser from "./NavigationButtonsDepartement";

interface propsT {
  handlecreate: (data: CreationDepartmentDTO) => Promise<boolean>;
}

export default function MultiStepFormDepartement({ handlecreate }: propsT) {
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState<boolean | undefined>(undefined);
  const [formData, setFormData] = useState<CreationDepartementT>({
    departement_id: 0,
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
    role: "CHEF_DEP",
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    handlecreate({
      user: {
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
      departement_name: formData.departement_name,
    }).then((value) => {
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

      {/* <h1 className="text-center lg:text-2xl 2xl:text-4xl roboto roboto-medium text-[#333]">
        Creér un Departement
      </h1> */}
      <div className="lg:max-w-[50vw] 2xl:max-w-[40vw] mx-auto mt-1 scale-75">
        <StepIndicatorUser currentStep={currentStep} />
      </div>

      <div className="w-full lg:max-w-[50vw] 2xl:max-w-[30vw] mx-auto lg:mt-6 2xl:px-12 2xl:py-10">
        {currentStep === 1 && (
          <StepOneUser formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 2 && (
          <StepTwoUser formData={formData} handleChange={handleChange} />
        )}
        {/* {currentStep === 3 && (
          <StepThreeUser formData={formData} handleChange={handleChange} />
        )} */}

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
