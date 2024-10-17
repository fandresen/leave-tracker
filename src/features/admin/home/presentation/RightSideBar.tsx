import Research from "@/components/Research";
import ToggleRightLayout from "@/components/ToggleRightLayout";
import { AiOutlineApartment } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import DepartementComponent from "./DepartementComponent";

interface propsT {
  openLayout: boolean;
  setOpenLayout: (open: boolean) => void;
}
export default function RightSideBar({ openLayout, setOpenLayout }: propsT) {
  return (
    <div>
      <ToggleRightLayout openLayout={openLayout} setOpenLayout={setOpenLayout}>
        <div className="w-full flex justify-center">
          <AiOutlineApartment className="w-16 h-16 text-sky-700 mt-3" />
        </div>

        <h1 className="text-xl 2xl:text-2xl text-gray-600 text-center mt-2 py-1 roboto">
          Choisir un Departement
        </h1>
        <div className="flex justify-center mt-6 2xl:mt-10">
          <Research className="rounded-full w-[280px] border border-gray-500 text-sm" />
          <div className="ml-4">
            <button className="px-3 py-3 2xl:py-3 text-xs 2xl:text-sm flex bg-[#0496ff] text-white font-semibold rounded-lg shadow hover:bg-blue-600 cursor-pointer">
              <FaPlus className="mt-[2px] 2xl:mt-[3px] mr-1" />
              Créer
            </button>
          </div>
        </div>
        <div className="mt-5">
            <DepartementComponent departmentName="Marketing" departmentNumber={1} employeeCount={12}/>
        </div>
      </ToggleRightLayout>
    </div>
  );
}
