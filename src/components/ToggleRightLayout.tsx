import { useEffect, useRef } from "react";

interface PropsT {
  children: React.ReactNode;
  openLayout: boolean;
  setOpenLayout: (open: boolean) => void; // Fonction pour modifier l'état externe
}

const ToggleRightLayout = ({ children,openLayout, setOpenLayout }: PropsT) => {
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
    <div className="">
      {/* Overlay noir */}
      {openLayout && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-50"
          onClick={() => setOpenLayout(false)} // Fermer le layout en cliquant sur l'overlay
        ></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[410px] 2xl:w-[450px] bg-white transform transition-transform duration-300 z-50 ${
          openLayout ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ToggleRightLayout;
