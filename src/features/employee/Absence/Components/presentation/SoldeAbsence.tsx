import { useAxiosWithToken } from "@/lib/interceptor";
import { useEffect, useState } from "react";

export default function SoldeAbsence() {
  const [solde,setSolde]=useState<number>()

  const axios = useAxiosWithToken();
  const fetchdata = async () => {
    // Fetch solde absence from API
    try {
      const res = await axios.get("/soldeConger");
      if (res.status === 200) {
        console.log(res.data.soldeConger);
        setSolde(res.data.soldeConger.solde);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata(); // Fetch solde absence on component mount and update on every render

    return () => {
      // Clean up function
      // Called when component unmounts
    };
  }, []);

  return (
    <div>
      <h1 className="text-xl 2xl:text-2xl text-gray-500 mb-2">
        Solde d'absence
      </h1>
      <h1 className="text-4xl 2xl:text-6xl text-center font-semiboldbold">
        {solde} <span className="text-xl">jour</span>
      </h1>
    </div>
  );
}
