import Loading from "@/components/ui/Loading";
import { useAxiosWithToken } from "@/lib/interceptor";
import { createEntrepriseT } from "@/lib/interface";
import { useEffect, useState } from "react";
import ListeEntrerpise from "../home/ListeEntrerpise";

export default function GetEntrepriseContainer() {
    const axios = useAxiosWithToken();
    const [loading, setLoading] = useState(false);
    const [entreprise, setEntreprise] = useState<createEntrepriseT[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get("/entreprise");
          if (res.status === 200) {
            setEntreprise(res.data);
          } else {
            console.log("Error fetching entreprise");
          }
        } catch (e) {
          console.error("Error fetching entreprise", e);
        }
        finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    if (loading) return <Loading loading={loading} />;
  return (
    <>
         <ListeEntrerpise entrerpises={entreprise}/>
    </>
  )
}
