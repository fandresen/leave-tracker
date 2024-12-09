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
      if(response.departementModel.id){
        dispatch(setDepartement());
        setActualDepID(response.departementModel.id);
      }
     
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDepartement();
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
