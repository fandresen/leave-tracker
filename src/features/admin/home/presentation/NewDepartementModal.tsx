import ModalComponent from "@/components/Modal";
import { ChangeEvent, FormEvent } from "react";
import { useHomeContext } from "../../Context/HomeContext";

interface propsT {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function NewDepartementModal({ handleSubmit, handleChange }: propsT) {
  const { departementModalOpen, closeDepartmentModal } = useHomeContext();

  return (
    <ModalComponent isOpen={departementModalOpen} onClose={closeDepartmentModal}>
      <div className="flex justify-center items-center h-full">
        <div className="w-[60vw] max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Créer un nouveau département</h2>
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="departmentName" className="block text-lg">Nom du département :</label>
            <input
              type="text"
              id="departmentName"
              name="departmentName"
              onChange={(e) => handleChange(e)}
              required
              placeholder="Nom du département"
              className="block w-full border border-gray-300 rounded-lg p-2 text-lg transition duration-300 focus:border-sky-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-sky-400 text-white py-2 rounded-lg hover:bg-sky-500 transition duration-300"
            >
              Créer
            </button>
          </form>
        </div>
      </div>
    </ModalComponent>
  );
}
