import ProfilAvatar from "@/components/ProfilAvatar";
import { useState } from "react";
import { FaGear } from "react-icons/fa6";
import { HiOutlineChevronLeft } from "react-icons/hi";
import RightSideBar from "./RightSideBar";

export default function TopSection() {
  const [openLayout, setOpenLayout] = useState(false);
  return (
    <>
      <div className="flex justify-between w-full pl-10">
        <div>
          <h1 className="text-lg font-medium text-gray-500">
            Departement : <span className="text-xl text-gray-700">{"IT"}</span>
          </h1>
        </div>
        <div>
          <h1 className="flex text-lg font-medium text-gray-500">
            Responsable :
            <ProfilAvatar
              lastName="Fandresena"
              classNameProfil="w-9 h-9 -mt-1 ml-4 mr-1"
            />
            <span className="text-sm text-gray-700 mt-1">Fandresena</span>
          </h1>
        </div>
        <div>
          <button>
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
        <RightSideBar openLayout={openLayout} setOpenLayout={setOpenLayout} />
      </div>
    </>
  );
}
