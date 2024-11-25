import ToggleRightLayout from "@/components/ToggleRightLayout";
import { AiOutlineApartment } from "react-icons/ai";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { ReactNode } from "react";

interface propsT {
  openLayout: boolean;
  setOpenLayout: (open: boolean) => void;
  children: ReactNode;
  depCreation: boolean; //pour savoir si on est en train de créer un departement
  backToDepartementList:()=>void;
}
export default function RightSideBarDepartement({
  openLayout,
  setOpenLayout,
  children,
  depCreation,
  backToDepartementList
}: propsT) {
  return (
    <div>
      <ToggleRightLayout openLayout={openLayout} setOpenLayout={setOpenLayout}>

        <div className="w-full flex justify-center">
        {depCreation ? (
          <IoArrowBackCircleOutline onClick={()=>backToDepartementList()} className=" w-10 h-10 2xl:w-11 2xl:h-11 text-gray-700 absolute left-2 top-2 cursor-pointer hover:text-sky-600" />
        ) : null
        }
          <AiOutlineApartment className="w-16 h-16 text-sky-700 mt-3" />
        </div>

        <h1 className="text-xl 2xl:text-2xl text-gray-600 text-center mt-2 py-1 roboto">
          {depCreation
            ? "Créer un nouveau département"
            : " Choisir un Departement"}
        </h1>
        <div className="mt-5">
          <div className="w-full h-full">{children}</div>
        </div>
      </ToggleRightLayout>
    </div>
  );
}
