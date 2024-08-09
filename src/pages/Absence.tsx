import DemandeAbsenceContainer from "@/features/employee/Absence/Components/container/DemandeAbsenceContainer";
import HistoriqueAbsence from "@/features/employee/Absence/Components/presentation/HistoriqueAbsence";
import SoldeAbsence from "@/features/employee/Absence/Components/presentation/SoldeAbsence";
import MycalendarContainer from "@/features/employee/home/components/container/MycalendarContainer";

export default function Absence() {
  return (
    <>
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full">
          <div className="flex justify-between flex-col md:flex-row mr-[5vw] mt-[5vh]">
            <h1 className="text-[2.5vw] ml-[1vw] font-medium text-gray-600">Demande d'absence</h1>
            <SoldeAbsence />
          </div>
          <div className="flex flex-col gap-[8vh] w-[95%]">
            <DemandeAbsenceContainer/>
            <MycalendarContainer/>
          </div>
        </div>
        <div className="w-full md:w-[30vw]">
          <HistoriqueAbsence/>
        </div>
      </div>
    </>
  );
}
