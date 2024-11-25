import DemandeAbsenceContainer from "@/features/employee/Absence/Components/container/DemandeAbsenceContainer";
import HistoriqueAbsence from "@/features/employee/Absence/Components/presentation/HistoriqueAbsence";
import SoldeAbsence from "@/features/employee/Absence/Components/presentation/SoldeAbsence";
import MycalendarContainer from "@/features/employee/home/components/container/MycalendarContainer.tsx";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="lg:w-[23%] 2xl:w-[22%]">
          <HistoriqueAbsence />
        </div>

        <div className="lg:w-[87%] 2xl:w-[75%]">
          <div className="float-right lg:mr-5 2xl:mr-0 bg-white lg:py-1 2xl:py-2 lg:h-[134px] 2xl:h-[153px] lg:mt-1 2xl:mt-1 lg:px-5 2xl:px-16 shadow-xl lg:rounded-xl 2xl:rounded-xl">
            <SoldeAbsence />
          </div>

          <div className="lg:w-[73%] 2xl:w-[75%] lg:ml-14 2xl:ml-5 bg-white lg:pl-10 2xl:px-10 lg:pb-6 2xl:pb-8 lg:pt-3 2xl:pt-2 shadow-xl rounded-xl lg:mt-1 2xl:mt-0">
            <h1 className="lg:text-lg 2xl:text-xl text-gray-500 font-medium">Demander une Absence</h1>
            <DemandeAbsenceContainer />
          </div>

          <MycalendarContainer />
        </div>
      </div>
    </>
  );
}
