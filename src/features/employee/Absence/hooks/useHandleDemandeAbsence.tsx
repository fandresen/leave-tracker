import { useEffect, useState } from "react";
import { demandeAdbsenceDataT } from "../Components/container/DemandeAbsenceContainer";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "@/redux/demandeAbsenceSlice";
import { Rootstate } from "@/redux/store";
import { useAxiosWithToken } from "@/lib/interceptor";

export default function useHandleDemandeAbsence() {
  const dispatch = useDispatch();
  const isOpen: boolean = useSelector<Rootstate>(
    (state) => state.demande_Absence.isOpen
  ) as boolean;
  const clickedDate = useSelector<Rootstate>(
    (state) => state.demande_Absence.startDate
  ) as Date;

  const [credentials, setCredentials] = useState<demandeAdbsenceDataT>({
    type: "",
    startDate: clickedDate,
    endDate: null,
  });

  const [invalidCredential,setInvalidCredential] = useState<boolean>(true);

  const axios = useAxiosWithToken();

  // Synchroniser credentials.startDate avec clickedDate lorsque clickedDate change
  useEffect(() => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      startDate: clickedDate,
    }));
  }, [clickedDate]);

   // Utilisation d'un useEffect pour surveiller les changements dans credentials et mettre à jour invalidCredential
   useEffect(() => {
    if (credentials.endDate != null && credentials.type !== "") {
      setInvalidCredential(false);
    } else {
      setInvalidCredential(true);
    }
  }, [credentials]);



  const handleTypeAbsencechange = (value: string) => {
    console.log(value);
    setCredentials({ ...credentials, type: value });
  };
  const handleStartDate = (value?: Date) => {
    setCredentials({ ...credentials, startDate: value });
  };
  const handleEndDate = (value?: Date) => {
    setCredentials({ ...credentials, endDate: value });
  };
  const handleClosePopUp = () => {
    setCredentials({startDate: clickedDate, endDate: null,type:"" });
    dispatch(toggleModal(false));
    setInvalidCredential(true);
  };
  const handleSubmit = async () => {
    if(credentials.endDate != null && credentials.type != ""){
      console.log(credentials.endDate);
      try {
        const response = await axios.post("/absence", credentials);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
      finally{
        handleClosePopUp();
      }
    }
    else{
      console.log("Veuillez remplir le formulaire");
    }
   
  };

  
  return {
    isOpen,
    credentials,
    handleClosePopUp,
    handleSubmit,
    handleEndDate,
    handleStartDate,
    handleTypeAbsencechange,
    invalidCredential
  };
}
