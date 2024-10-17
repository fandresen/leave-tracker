import { useAxiosWithToken } from "@/lib/interceptor";
import { DepartementT } from "@/lib/interface";
import { setDepartement } from "@/redux/AdminSlice";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type HomeContextType = {
  actualDepID: number;
  changeActualDepID: (id: number) => void;
};

// Création du contexte
const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const useHomeContext = () => {
  const context = React.useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
};

export default function HomeProvider({ children }: { children: ReactNode }) {
  const [actualDepID, setActualDepID] = useState<number>(0);
  const axios = useAxiosWithToken();
  const dispatch = useDispatch();

  const fetchDepartement = async () => {
    try {
      const response = (
        await axios.get<DepartementT>(`/departement/${actualDepID}`)
      ).data;
      setActualDepID(response.id);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllDepartement = async () => {
    try {
      const res = await axios.get<DepartementT[]>("/departement");
      if (res.status === 200) {
        if (res.data.length > 0) {
          dispatch(setDepartement());
        }
        // setDepartements(res.data);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  useEffect(() => {
    fetchDepartement();
    fetchAllDepartement();
  }, []);

  const changeActualDepID = (id: number) => {
    setActualDepID(id);
  };

  return (
    <HomeContext.Provider
      value={{
        actualDepID,
        changeActualDepID,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
