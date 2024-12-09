
interface propsT{
    isOpen: boolean;
    onClose:()=>void;
    children: React.ReactNode;
}
const ModalComponent = ({ isOpen, onClose, children }:propsT) => {
  // Si le modal n'est pas ouvert, ne pas le rendre dans le DOM
  if (!isOpen) return null;

  // Gestionnaire de clic pour l'arrière-plan
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    // Vérifie si l'utilisateur a cliqué directement sur l'arrière-plan (overlay)
    if ((event.target!  as HTMLElement).id  === "modal-overlay") {
      onClose(); // Appelle la fonction pour fermer le modal
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
    >
      <div className="bg-white p-6 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
