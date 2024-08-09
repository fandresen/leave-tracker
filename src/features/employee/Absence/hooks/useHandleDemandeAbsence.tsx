import { useEffect, useState } from "react";
import { demandeAdbsenceDataT } from "../Components/container/DemandeAbsenceContainer";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "@/redux/demandeAbsenceSlice";
import { Rootstate } from "@/redux/store";

export default function useHandleDemandeAbsence() {
  const dispatch = useDispatch();
  const isOpen: boolean = useSelector<Rootstate>(
    (state) => state.demande_Absence.isOpen
  ) as boolean;
  const clickedDate = useSelector<Rootstate>(
    (state) => state.demande_Absence.startDate
  ) as Date;

  const [credentials, setCredentials] = useState<demandeAdbsenceDataT>({
    typeAbsence: "",
    startDate: clickedDate,
    endDate: undefined,
  });

  useEffect(() => {
    console.log("niakatra leka");
    if (credentials.endDate === undefined) {
      setCredentials({ ...credentials, endDate: new Date(clickedDate) });
    }
  }, [credentials]);

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
  const handleClosePopUp = () => {
    dispatch(toggleModal(false));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(credentials);
  };

  
  return {
    isOpen,
    credentials,
    handleClosePopUp,
    handleSubmit,
    handleEndDate,
    handleStartDate,
    handleTypeAbsencechange,
  };
}
