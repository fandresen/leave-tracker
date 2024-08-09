import React, { useState } from "react";
import DemandeAbsence from "../presentation/DemandeAbsence";
import { ConfirmationPopUp } from "../presentation/ConfirmationPopUp";
import axios from "axios";

export interface demandeAdbsenceDataT {
  typeAbsence: string;
  startDate?: Date ;
  endDate?: Date ;
}

export default function DemandeAbsenceContainer() {
  const [credentials, setCredentials] = useState<demandeAdbsenceDataT>({
    typeAbsence: "",
    startDate: undefined,
    endDate: undefined,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleTypeAbsencechange = (value: string) => {
    console.log(value);
    setCredentials({ ...credentials, typeAbsence: value });
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
  const handleSubmit = async (e:React.FormEvent) => {
    try{
      await axios.post(`${Api_Demande_ABSENCE}/add`, credentials);
      setIsOpen(false);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  return (
    <>
      <DemandeAbsence
        handleTypeAbsencechange={(value) => handleTypeAbsencechange(value)}
        handleStartDate={(value) => handleStartDate(value)}
        handleEndDate={(value) => handleEndDate(value)}
        handleSubmit={handleSubmit}
        startDate={credentials.startDate!}
        endDate={credentials.endDate!}
      />
      <ConfirmationPopUp isOpen={isOpen} onClose={handleClosePopUp} data={credentials}/>
    </>
  );
}
