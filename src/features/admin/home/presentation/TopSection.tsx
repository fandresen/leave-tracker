import ProfilAvatar from "@/components/ProfilAvatar";
import { useCallback, useEffect, useState } from "react";
import { FaGear } from "react-icons/fa6";
import { HiOutlineChevronLeft } from "react-icons/hi";
import RightSideBar from "./RightSideBar";
import { DepartementT } from "@/lib/interface";
import DepartementComponent from "./DepartementComponent";
import Research from "@/components/Research";
import { FaPlus } from "react-icons/fa";
import Loading from "@/components/ui/Loading";

interface propsT {
  departement_info: DepartementT;
  allDepartement: DepartementT[];
  onClickDepartement: (departementID: number) => void;
}
export default function TopSection({departement_info,allDepartement,onClickDepartement,}: propsT) {
  useEffect(()=>{
    console.log(allDepartement)
  },[])
  const [openLayout, setOpenLayout] = useState(false);
  const [researchedDepartements, setResearchedDepartements] = useState<DepartementT[]>(() => allDepartement);
  const [loading,setLoading] = useState(false);
  const onSingleDepartementClick = (departement_id: number) => {
    onClickDepartement(departement_id);
    setOpenLayout(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const researchDepartement = useCallback(
    (departements: DepartementT[]) => {
      if (departements.length === 0) {
        setResearchedDepartements(allDepartement); // Remettre tous les départements si aucun résultat
      } else {
        setResearchedDepartements(departements);
      }
    },
    [allDepartement]
  );
  return (
    <>
    <Loading loading={loading}/>
      <div className="flex justify-between w-full pl-10">
        <div>
          <h1 className="text-lg font-medium text-gray-500">
            Departement :{" "}
            <span className="text-xl text-gray-700">
              {departement_info.departementModel.name}
            </span>
          </h1>
        </div>
        <div>
          <h1 className="flex text-lg font-medium text-gray-500">
            Responsable :
            <ProfilAvatar
              lastName={departement_info.responsable.lastname}
              classNameProfil="w-9 h-9 -mt-1 ml-4 mr-1"
            />
            <span className="text-sm text-gray-700 mt-1">
              {departement_info.responsable.lastname}
            </span>
          </h1>
        </div>
        <div>
          <button aria-label="Open settings">
            <FaGear className="w-6 h-6" color="#333" />
          </button>
        </div>
        <button
          onClick={() => setOpenLayout(!openLayout)}
          className="px-3 py-3 -mt-2 text-xs font-medium text-white bg-[#0077b6] rounded-sm hover:bg-[#0076b6bb] flex"
        >
          Departements <HiOutlineChevronLeft className="w-4 h-4" />
        </button>
      </div>
      <div className="max-h-1">
        <RightSideBar openLayout={openLayout} setOpenLayout={setOpenLayout}>
          <div className="flex justify-center mt-0 2xl:mt-6">
            <Research
              className="rounded-full w-[280px] border border-gray-500 text-sm"
              filteredData={researchDepartement}
              data={allDepartement}
            />
            <div className="ml-4">
              <button className="px-3 py-3 2xl:py-3 text-xs 2xl:text-sm flex bg-[#0496ff] text-white font-semibold rounded-lg shadow hover:bg-blue-600 cursor-pointer">
                <FaPlus className="mt-[2px] 2xl:mt-[3px] mr-1" />
                Créer
              </button>
            </div>
          </div>
          {researchedDepartements.map((departement) => (
            <DepartementComponent
              departmentName={departement.departementModel.name}
              departmentNumber={departement.departementModel.id}
              employeeCount={departement.numberOfEmployees}
              onclick={onSingleDepartementClick}
            />
          ))}
        </RightSideBar>
      </div>
    </>
  );
}
