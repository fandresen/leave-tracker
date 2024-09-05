import ModalComponent from "@/components/Modal";
import { ChangeEvent, FormEvent } from "react";
import { useHomeContext } from "../../Context/HomeContext";

interface propsT{
  handleSubmit:(e:FormEvent<HTMLFormElement>)=>void;
  handleChange:(e:ChangeEvent<HTMLInputElement>)=>void;

}
export default function NewUserModal({handleSubmit,handleChange}:propsT) {
  const { departementModalOpen, closeDepartmentModal } = useHomeContext();
  return (
    <ModalComponent isOpen={departementModalOpen} onClose={closeDepartmentModal}>

    <div className="w-[40%] 2xl:h-[30vh] bg-slate-50 absolute inset-0 m-auto rounded-2xl text-center">
      <form className="mt-[5vh]" onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="departmentName" className="text-2xl">New Department Name:</label>
        <input type="text" id="departmentName" name="departmentName" onChange={(e)=>handleChange(e)} required placeholder="departement name" className="block border mx-auto border-gray-400 w-[50%] mt-5 px-2 py-2 text-2xl rounded-lg"/>
        <button type="submit" className="w-[40%] bg-sky-300 py-3 text-2xl rounded-xl mt-10">Create</button>

      </form>
    </div>
    </ModalComponent>
  )
}
