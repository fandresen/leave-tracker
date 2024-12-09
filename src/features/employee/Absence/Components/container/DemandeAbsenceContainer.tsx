import React, { useState } from "react";
import DemandeAbsence from "../presentation/DemandeAbsence";
import { ConfirmationPopUp } from "../presentation/ConfirmationPopUp";

export interface demandeAdbsenceDataT {
  type: string;
  startDate?: Date ;
  endDate?: Date|null;
}

export default function DemandeAbsenceContainer() {
  const [credentials, setCredentials] = useState<demandeAdbsenceDataT>({
    type: "",
    startDate: undefined,
    endDate: undefined,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleTypeAbsencechange = (value: string) => {
    console.log(value);
    setCredentials({ ...credentials, type: value });
  };
  const handleStartDate = (value?: Date) => {
    console.log(value);
    setCredentials({ ...credentials, startDate: value });
  };
  const handleEndDate = (value?: Date) => {
    console.log(value);
    setCredentials({ ...credentials, endDate: value });
  };
  const handleClosePopUp= () => {
    setIsOpen(false);
  };
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    console.log(credentials);
    setIsOpen(true);
  };
  return (
    <>
    <div className="lg:-mt-[70px] 2xl:-mt-28">

   
      <DemandeAbsence
        handleTypeAbsencechange={(value) => handleTypeAbsencechange(value)}
        handleStartDate={(value) => handleStartDate(value)}
        handleEndDate={(value) => handleEndDate(value)}
        handleSubmit={handleSubmit}
        startDate={credentials.startDate!}
        endDate={credentials.endDate!}
      />
      <ConfirmationPopUp isOpen={isOpen} onClose={handleClosePopUp} data={credentials}/>
      </div>
    </>
  );
}
