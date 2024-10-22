import ToggleRightLayout from "@/components/ToggleRightLayout";
import { AiOutlineApartment } from "react-icons/ai";
import { ReactNode } from "react";

interface propsT {
  openLayout: boolean;
  setOpenLayout: (open: boolean) => void;
  children: ReactNode;
}
export default function RightSideBar({
  openLayout,
  setOpenLayout,
  children,
}: propsT) {
  return (
    <div>
      <ToggleRightLayout openLayout={openLayout} setOpenLayout={setOpenLayout}>
        <div className="w-full flex justify-center">
          <AiOutlineApartment className="w-16 h-16 text-sky-700 mt-3" />
        </div>

        <h1 className="text-xl 2xl:text-2xl text-gray-600 text-center mt-2 py-1 roboto">
          Choisir un Departement
        </h1>
        
        <div className="mt-5">
          <div className="w-full h-full overflow-y-auto">{children}</div>
        </div>
      </ToggleRightLayout>
    </div>
  );
}
