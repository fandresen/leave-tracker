import DemandeAbsenceContainer from "@/features/employee/Absence/Components/container/DemandeAbsenceContainer";
import HistoriqueAbsence from "@/features/employee/Absence/Components/presentation/HistoriqueAbsence";
import SoldeAbsence from "@/features/employee/Absence/Components/presentation/SoldeAbsence";
import MycalendarContainer from "@/features/employee/home/components/container/MycalendarContainer";

export default function Absence() {
  return (
    <>
      <div className="w-full h-full flex">
        <div className="w-[30vw]">
          <HistoriqueAbsence />
        </div>
        <div className="w-full">
          <div className="float-right mr-[5vw] mt-[5vh]">
            <SoldeAbsence />
          </div>
          <div className="flex flex-col gap-[8vh] w-[95%]">
            <DemandeAbsenceContainer />
            <MycalendarContainer />
          </div>
        </div>
      </div>
    </>
  );
}
