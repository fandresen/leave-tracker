import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

// Type du contexte
type HomeContextType = {
  departementModalOpen: boolean;
  userModalOpen: boolean;
  setUserModalOpen: Dispatch<SetStateAction<boolean>>
  openUserModal:()=>void;
  closeUserModal:()=>void;
  setDepartementModalOpen: Dispatch<SetStateAction<boolean>>; 
  openDepModal: () => void; 
  closeDepartmentModal: () => void;  
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
  const [departementModalOpen, setDepartementModalOpen] = useState<boolean>(false);

  // Fonctions pour ouvrir et fermer le modal
  const openDepModal = () => setDepartementModalOpen(true);
  const closeDepartmentModal = () => setDepartementModalOpen(false);

  return (
    <HomeContext.Provider
      value={{
        closeUserModal,
        openUserModal,
        departementModalOpen,
        setDepartementModalOpen,
        openDepModal,
        closeDepartmentModal,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
