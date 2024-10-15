import { useEffect, useRef } from "react";

interface PropsT {
  children: React.ReactNode;
  toggleButton: React.ReactNode;
  openLayout: boolean; // L'état d'ouverture du sidebar est contrôlé à l'extérieur
  setOpenLayout: (open: boolean) => void; // Fonction pour modifier l'état externe
}

const ToggleRightLayout = ({ children, toggleButton, openLayout, setOpenLayout }: PropsT) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Fonction pour gérer le clic à l'extérieur de la sidebar
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setOpenLayout(false); // Fermer le sidebar en modifiant l'état externe
    }
  };

  useEffect(() => {
    if (openLayout) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openLayout, setOpenLayout]);

  return (
    <div className="relative min-h-screen flex z-50">
      {/* Overlay noir */}
      {openLayout && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setOpenLayout(false)} // Fermer le layout en cliquant sur l'overlay
        ></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[500px] bg-gray-50 text-white transform transition-transform duration-300 z-50 ${
          openLayout ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>

      {/* Bouton toggle (fourni par les props) */}
      <div onClick={() => setOpenLayout(!openLayout)} className="max-h-10 ">{toggleButton}</div>
    </div>
  );
};

export default ToggleRightLayout;
