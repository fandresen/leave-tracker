export default function StepIndicatorDepartement({
  currentStep,
}: {
  currentStep: number;
}) {
  const steps = [1, 2];

  return (
    <div className="flex justify-between items-center mb-8 lg:w-[75%] 2xl:w-full mx-auto">
      {steps.map((step, index) => (
        <>
        {
            step == 1 && (  <div key={currentStep} className={`w-32 h-[5px] 2xl:h-[6px] ${currentStep === step ? "bg-sky-400" : "bg-gray-200"} rounded-full`}></div>)
        }
          <div
            key={index}
            className={`w-5 2xl:w-8 h-5 p-3 2xl:h-8 flex items-center justify-center rounded-full ${
              currentStep === step ? "bg-sky-600/70" : "bg-gray-300"
            }`}
          >
            <span
              className={`lg:text-sm 2xl:text-lg font-medium ${
                currentStep === step ? "text-white" : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </div>
          <div className={`w-32 h-[5px] 2xl:h-[6px] ${currentStep === step ? "bg-sky-400" : "bg-gray-200"} rounded-full`}></div>
        </>
      ))}
    </div>
  );
}
