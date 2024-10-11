import SingleAbsenceValidation from "@/features/chef_dep/validation_absence/SingleAbsenceValidation";

export default function AbsenceValidation() {
  const handleApprove = () => {
    console.log("Absence approuvée !");
  };

  const handleReject = () => {
    console.log("Absence refusée !");
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <SingleAbsenceValidation
          employeeName="Jean Dupont"
          startDate="15 Octobre 2024"
          endDate="20 Octobre 2024"
          reason="Congé maladie"
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </>
  );
}
