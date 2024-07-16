import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { demandeAdbsenceDataT } from "../container/DemandeAbsenceContainer";

interface propsT {
  isOpen: boolean;
  onClose: () => void;
  data: demandeAdbsenceDataT;
}
export function ConfirmationPopUp({ isOpen, onClose, data }: propsT) {
  const tolisibleDate = (date?: Date) => {
    if (date) {
      return new Date(date).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
    return "";
  };
  const dateSoustraction = (date1?: Date, date2?: Date) => {
    if (date1 && date2) {
      const diffTime = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white min-w-[60vw] min-h-[80vh] 2xl:min-w-[40vw] 2xl:min-h-[60vh]">
        <DialogHeader>
          <DialogTitle className="2xl:text-2xl">
            Confirmation Demande d'absence
          </DialogTitle>
          <DialogDescription>
            <div className="flex justify-between px-5 py-3 2xl:py-5 mt-[3vh] bg-gray-100">
              <div>
                <h1 className="text-lg 2xl:text-2xl font-normal">Type</h1>
                <h1 className="text-sm 2xl:text-xl text-gray-600 text-center font-normal">
                  {data.typeAbsence}
                </h1>
              </div>
              <div>
                <h1 className="text-lg 2xl:text-2xl font-normal">Debut</h1>
                <h1 className="text-sm 2xl:text-xl text-gray-600 text-center font-normal">{`${tolisibleDate(
                  data.startDate
                )}`}</h1>
              </div>
              <div>
                <h1 className="text-lg 2xl:text-2xl font-normal">Fin</h1>
                <h1 className="text-sm 2xl:text-xl text-gray-600 text-center font-normal">{`${tolisibleDate(
                  data.endDate
                )}`}</h1>
              </div>
              <div>
                <h1 className="text-lg 2xl:text-2xl font-normal">Total</h1>
                <h1 className="text-sm 2xl:text-2xl text-gray-600 text-center font-normal">{`${dateSoustraction(
                  data.startDate,
                  data.endDate
                )} jour${
                  dateSoustraction(data.startDate, data.endDate)! > 1 ? "s" : ""
                }`}</h1>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div>
          <h1>Solde de congé Disponible</h1>
          <h1>Absence demandé</h1>
          <h1>Solde de Congé apres Validation</h1>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
