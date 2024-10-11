import { useAxiosWithToken } from "@/lib/interceptor";
import { absenceDTO } from "@/lib/interface";
import { customOptions } from "@/lib/others";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UseAbsenceValidation() {

  const axios = useAxiosWithToken();
  const navigate = useNavigate();
  const [absenceId, setAbsenceId] = useState<string | null>();
  const [absenceInfo, setAbsenceInfo] = useState<absenceDTO>();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("absenceId");
    setAbsenceId(id);
  }, []);

  const fetchAbsenceInfo = async (id: string) => {
    try {
      const res = (await axios.get<absenceDTO>(`/absence?id=${id}`)).data;
      setAbsenceInfo(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (absenceId) {
      fetchAbsenceInfo(absenceId);
    }
  }, [absenceId]);

  const onApprove = async () => {
    try {
      await axios.post(`/absence/updateStatus?absenceID=${absenceId}&action=approve`);
      toast.success("Absence approuvée avec succès!",customOptions);
      setTimeout(()=>{
        navigate("/chef-dep"); 
      },2000)
      
    } catch (error) {
      console.log(error);
      toast.error("Erreur lors de l'approbation de l'absence.");
    }
  }

  const onReject = async () => {
    try {
      await axios.post(`/absence/updateStatus?absenceID=${absenceId}&action=reject`);
      toast.success("Absence refusée avec succès!", customOptions);
      setTimeout(()=>{
        navigate("/chef-dep"); 
      },2000)
      
    } catch (error) {
      console.log(error);
      toast.error("Erreur lors du refus de l'absence.");
    }
  }

  return {
    absenceInfo,
    onApprove,
    onReject,
  };

}
