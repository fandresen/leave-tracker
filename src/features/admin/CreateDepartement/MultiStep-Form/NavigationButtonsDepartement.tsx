interface propsT{
  currentStep : number; 
  handleNext :()=>void;
  handleBack :()=>void;
  handleSubmit : ()=>void;
}
export default function NavigationButtonsDepartement({ currentStep, handleNext, handleBack,handleSubmit }:propsT) {
    return (
      <div className="flex justify-between mt-8 px-16">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-transparent hover:border-2 hover:border-gray-300"
          >
            Back
          </button>
        )}
        {currentStep < 2 && (
          <button
            onClick={handleNext}
            className={`${currentStep == 1? "mx-auto px-14" : "ml-auto px-6"} py-2 bg-sky-600 text-white rounded-md hover:bg-transparent hover:border-2 hover:border-sky-600 hover:text-sky-600`}
          >
            Next
          </button>
        )}
        {currentStep === 2 && (
          <button
            className="ml-auto px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-transparent hover:border-2 hover:border-sky-600 hover:text-sky-600"
            onClick={()=>handleSubmit()}
          >
            Submit
          </button>
        )}
      </div>
    );
  }
  