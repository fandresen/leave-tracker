import { useAxiosWithToken } from "@/lib/interceptor";
import { setSoldeConger } from "@/redux/congerSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
      <div className="bg-slate-600/10 dark:bg-slate-300/10 shadow-lg rounded-2xl p-3 mt-2 justify-center items-center">
        {/* date de début , fin et jour d'absence */}
        <div className="p-2 flex justify-between">
          <label className="block dark:text-slate-200 text-lg font-semibold ">Date début:</label>
          10/08/2024
        </div>
        <div className="p-2 flex justify-between">
          <label className="block dark:text-slate-200 text-lg font-semibold ">Date fin:</label>
          13/08/2024
        </div>
        <div className="p-2 flex justify-between">
          <label className="block dark:text-slate-200 text-lg font-semibold ">Jour d'absence:</label>
          2 jours
        </div>
        {/* type d'absence */}
        <div className="p-2 flex justify-between">
          <label className="block dark:text-slate-200 text-lg font-semibold ">Type d'absence:</label>
          Maladie
        </div>
        {/* etat de la demande */}
        <div className="p-2 flex justify-between">
          <label className="block dark:text-slate-200 text-lg font-semibold ">Etat de la demande:</label>
         <span className="text-green-400">Acceptée</span>
        </div>
      </div>
    </div>
  )
}
