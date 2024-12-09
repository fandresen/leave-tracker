import Research from "@/components/Research";
import DepartementComponent from "./DepartementComponent";
import { DepartementT } from "@/lib/interface";
import { FaPlus } from "react-icons/fa";

interface propsT{
  researchDepartements: DepartementT[];
  allDepartement: DepartementT[];
  onSingleDepartementClick: (departementID: number) => void;
  searchDepartement: (data: DepartementT[]) => void;
  handleCreateDepartement: () => void; 
}
export default function ChooseDepartement({allDepartement,onSingleDepartementClick,researchDepartements,searchDepartement,handleCreateDepartement}:propsT) {


  return (
    <div className="w-full  overflow-y-auto">
      <div className="flex justify-center mt-0 2xl:mt-6">
            <Research
              className="rounded-full w-[280px] border border-gray-500 text-sm"
              filteredData={searchDepartement}
              data={allDepartement}
            />
            <div className="ml-4">
              <button onClick={()=>handleCreateDepartement()} className="px-3 py-3 2xl:py-3 text-xs 2xl:text-sm flex bg-[#0496ff] text-white font-semibold rounded-lg shadow hover:bg-blue-600 cursor-pointer">
                <FaPlus className="mt-[2px] 2xl:mt-[3px] mr-1" />
                Créer
              </button>
            </div>
          </div>
          {researchDepartements.map((departement) => (
            <DepartementComponent
              departmentName={departement.departementModel.name}
              departmentNumber={departement.departementModel.id}
              employeeCount={departement.numberOfEmployees}
              onclick={onSingleDepartementClick}
            />
          ))}
    </div>
  );
}
