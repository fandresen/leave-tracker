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
    invalidCredential,
  } = useHandleDemandeAbsence();
  
  const clickedDate = useSelector<Rootstate>(
    (state) => state.demande_Absence.startDate
  ) as Date;
  const soldeConger = useSelector<Rootstate>(
    (state) => state.conger.soldeConger
  ) as number;

  const absenceDemandee = dateSoustraction(
    credentials.startDate,
    credentials.endDate
  );
  const absenceAfterValidation = soldeConger - absenceDemandee!;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClosePopUp}>
        <DialogContent className="bg-white min-w-[50vw] min-h-[80vh] 2xl:min-w-[40vw] 2xl:min-h-[60vh] rounded-lg p-7">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium text-center">
              Demande d'absence
            </DialogTitle>
            <DialogDescription>
              <div className="w-[12vw] text-center float-right">
                <SoldeAbsence />
              </div>

              <div className="mt-1">
                <label className="block lg:text-lg 2xl:text-xl font-medium text-gray-600 mb-2">
                  Type d'absence
                </label>
                <SelectTypeAbsence
                  handleChangeValue={(value) => handleTypeAbsencechange(value)}
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <div>
            <div className=" w-full flex justify-between">
              <div>
                <label className="block 2xl:text-xl mb-2">Date début</label>
                <DatePicker
                  clasName="w-[15vw]"
                  handleSelectValue={(value) => handleStartDate(value)}
                  defaultValue={clickedDate!}
                />
              </div>
              <div>
                <label className="block 2xl:text-xl mb-2">Date fin</label>
                <DatePicker
                  clasName="w-[15vw]"
                  handleSelectValue={(value) => handleEndDate(value)}
                  pastDate={clickedDate}
                />
              </div>
            </div>
            <div className=" w-full mt-[5vh] py-4 flex justify-between px-10 bg-gray-100">
              <div className="">
                <h1 className="lg:text-lg 2xl:text-2xl text-gray-700">
                  Absence demandé
                </h1>
                <h1 className="lg:text-2xl 2xl:text-3xl mt-3 text-center">{`${
                  absenceDemandee != undefined ? absenceDemandee : 0
                }  jour${absenceDemandee! >= 1 ? "s" : ""}`}</h1>
              </div>
              <div>
                <h1 className="lg:text-lg 2xl:text-2xl text-gray-700">
                  Solde d'absence apres validation
                </h1>
                <h1 className="lg:text-2xl 2xl:text-3xl mt-3 text-center">
                  {`${
                    !isNaN(absenceAfterValidation) ? absenceAfterValidation : 0
                  } jour${absenceAfterValidation > 1 ? "s" : ""}`}{" "}
                </h1>
              </div>
            </div>
          </div>

          <DialogFooter>
            {!invalidCredential ? (
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault(); // Prevents default form submission if needed
                  handleSubmit();
                }}
                className="w-[90%] mx-auto h-16 p-3 text-xl 2xl:text-2xl text-white font-medium rounded-xl mt-7 bg-sky-700 hover:bg-sky-600 hover:text-[#ffffff]"
              >
                Valider
              </button>
            ) : null}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
