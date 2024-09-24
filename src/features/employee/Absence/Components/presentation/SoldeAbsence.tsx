import { useAxiosWithToken } from "@/lib/interceptor";
import { setSoldeConger } from "@/redux/congerSlice";
import { Rootstate } from "@/redux/store";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SoldeAbsence() {
  const dispatch = useDispatch()
  const solde = useSelector<Rootstate>((state) => state.conger.soldeConger) as number;
  const userId = 0

  const axios = useAxiosWithToken();
  const fetchdata = async () => {
    // Fetch solde absence from API
    try {
      const res = await axios.get(`/soldeConger/:${userId}`);
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

  return (
    <div className="">
      <h1 className="text-xl text-gray-500 mb-6">
        Solde d'absence
      </h1>
      <h1 className="text-4xl 2xl:text-6xl text-center font-semiboldbold">
        {solde} <span className="text-xl">jours</span>
      </h1>
    </div>
  );
}
