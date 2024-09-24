import DemandeAbsenceContainer from "@/features/employee/Absence/Components/container/DemandeAbsenceContainer";
import HistoriqueAbsence from "@/features/employee/Absence/Components/presentation/HistoriqueAbsence";
import SoldeAbsence from "@/features/employee/Absence/Components/presentation/SoldeAbsence";
import MycalendarContainer from "@/features/employee/home/components/container/MycalendarContainer.tsx";

export default function Home() {
  return (
    <>
      {/* <div className="float-right mr-40 bg-white 2xl:py-5 2xl:px-20 shadow-xl 2xl:rounded-xl">
        <SoldeAbsence />
      </div>
      <DemandeAbsenceContainer />
      <div className="text-gray-500 text-3xl 2xl:text-3xl w-full 2xl:px-10 mx-auto flex">
      <div className="w-[22vw] -mt-44">
          <HistoriqueAbsence />
        </div>
        <MycalendarContainer />
      </div> */}
      <div className="flex">
        <div className="w-[20%]">
          <HistoriqueAbsence />
        </div>

        <div className="w-[75%]">
          <div className="float-right mr-0 bg-white 2xl:py-2 2xl:h-[153px] 2xl:mt-1 2xl:px-16 shadow-xl 2xl:rounded-xl">
            <SoldeAbsence />
          </div>

          <div className="w-[75%] ml-5 bg-white px-10 pb-8 pt-2 shadow-xl rounded-xl">
            <h1 className="text-xl text-gray-500">Demander une Absence</h1>
            <DemandeAbsenceContainer />
          </div>

          <MycalendarContainer />
        </div>
      </div>
    </>
  );
}
