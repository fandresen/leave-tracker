import { useAxiosWithToken } from "@/lib/interceptor";
import { setSoldeConger } from "@/redux/congerSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import OneAbsenceHistory from "./OneAbsenceHistory";

export default function HistoriqueAbsence() {
  const dispatch = useDispatch()

  const axios = useAxiosWithToken();
  const fetchdata = async () => {
    // Fetch absence from API
    try {
      const res = await axios.get(`/absence`);
      if (res.status === 200) {
        dispatch(setSoldeConger(res.data.solde));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
    return () => {
    };
  }, []);

  return(
    <div className="w-full h-full mt-2 p-4 border-t-2 md:border-t-0 border-l-0 md:border-r-2 bg-white">
      <h1 className="text-center dark:text-slate-200 text-2xl font-semibold">Historique des absences</h1>
      <OneAbsenceHistory begin="10/20/2024" end="12/20/2024" etat="ACCEPTE" jours={10} type="Maladie"/>
      <OneAbsenceHistory begin="10/20/2024" end="12/20/2024" etat="REFUSE" jours={10} type="Maladie"/>
      <OneAbsenceHistory begin="10/20/2024" end="12/20/2024" etat="EN COURS" jours={10} type="Maladie"/>
      <OneAbsenceHistory begin="10/20/2024" end="12/20/2024" etat="ACCEPTE" jours={10} type="Maladie"/>
    </div>
  )
}
