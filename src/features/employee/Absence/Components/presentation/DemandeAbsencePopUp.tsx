import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useHandleDemandeAbsence from "../../hooks/useHandleDemandeAbsence";
import { SelectTypeAbsence } from "../ui/SelectTyepeAbsence";
import { DatePicker } from "../ui/DatePicker";
import SoldeAbsence from "./SoldeAbsence";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import { dateSoustraction } from "@/lib/others";

export default function DemandeAbsencePopUp() {
  const {
    handleEndDate,
    handleStartDate,
    handleSubmit,
    handleTypeAbsencechange,
    credentials,
    isOpen,
    handleClosePopUp,
  } = useHandleDemandeAbsence();

  const clickedDate = useSelector<Rootstate>((state)=>state.demande_Absence.startDate) as Date
  const soldeConger = useSelector<Rootstate>((state) => state.conger.soldeConger) as number;

  const absenceDemandee = dateSoustraction(credentials.startDate, credentials.endDate)

  return (
    <>
    
        <Dialog open={isOpen} onOpenChange={handleClosePopUp}>
          <DialogContent className="bg-white min-w-[60vw] min-h-[80vh] 2xl:min-w-[40vw] 2xl:min-h-[60vh] rounded-lg">
            <DialogHeader>
              <DialogTitle className="2xl:text-2xl">
                Demande d'absence
              </DialogTitle>
              <DialogDescription>
                <div className="w-[12vw] text-center float-right">
                  <SoldeAbsence />
                </div>

                <div className="">
                  <label className="block text-xl font-semibold mb-2">
                    Type d'absence
                  </label>
                  <SelectTypeAbsence
                    handleChangeValue={(value) =>
                      handleTypeAbsencechange(value)
                    }
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
            <div>
              <div className=" w-full flex justify-between">
                <div>
                  <label className="block text-xl mb-2">Date début</label>
                  <DatePicker
                    clasName="w-[15vw]"
                    handleSelectValue={(value) => handleStartDate(value)}
                    defaultValue={clickedDate!}
                  />
                </div>
                <div>
                  <label className="block text-xl mb-2">Date fin</label>
                  <DatePicker
                    clasName="w-[15vw]"
                    handleSelectValue={(value) => handleEndDate(value)}
                    pastDate={clickedDate}
                  />
                </div>
              </div>
              <div className=" w-full h-[12vh] mt-[5vh] -mb-10 pt-5 flex justify-between px-10 bg-gray-200">
                <div className="">
                  <h1 className="text-2xl text-gray-700">Absence demandé</h1>
                  <h1 className="text-3xl mt-3 text-center">{`${absenceDemandee}  jour${absenceDemandee! > 1 ? "s" : ""}`}</h1>
                </div>
                <div>
                  <h1 className="text-2xl text-gray-700">Solde d'absence apres validation</h1>
                  <h1 className="text-3xl mt-3 text-center">{`${soldeConger-absenceDemandee!} jour${soldeConger-absenceDemandee! > 1 ? "s": '' }`} </h1>
                </div>
              </div>
            </div>

            <DialogFooter>
              <button
                type="submit"
                onClick={ (e)=> handleSubmit(e)}
                className="w-[90%] mx-auto h-16 p-3 text-xl 2xl:text-2xl text-[#333] rounded-xl mt-7 bg-[#7BE8D7] hover:bg-[#68c2b4] hover:text-[#ffffff]"
              >
                Valider
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

    </>
  );
}
