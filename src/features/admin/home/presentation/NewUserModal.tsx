import ModalComponent from "@/components/Modal";
import { ChangeEvent, FormEvent} from "react";
import { useHomeContext } from "../../Context/HomeContext";
import SelectDepartement from "./SelectDepartement";

interface propsT {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function NewUserModal({ handleSubmit, handleChange }: propsT) {
  const { userModalOpen, closeUserModal } = useHomeContext();

  return (
    <ModalComponent isOpen={userModalOpen} onClose={closeUserModal}>
      <div className="w-[40%] 2xl:h-[85vh] py-5 bg-slate-50 absolute inset-0 m-auto rounded-2xl text-center">
        <form className="mt-[2vh]" onSubmit={(e) => handleSubmit(e)}>
          {/* First Name */}
          <label htmlFor="first_name" className="text-2xl">
            First Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            onChange={handleChange}
            required
            placeholder="First Name"
            className="block border mx-auto border-gray-400 w-[50%] mt-2 px-2 py-2 text-2xl rounded-lg"
          />

          {/* Last Name */}
          <label htmlFor="last_name" className="text-2xl mt-5">
            Last Name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Last Name"
            className="block border mx-auto border-gray-400 w-[50%] mt-2 px-2 py-2 text-2xl rounded-lg"
          />

          {/* Email */}
          <label htmlFor="email" className="text-2xl mt-5">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Email"
            className="block border mx-auto border-gray-400 w-[50%] mt-2 px-2 py-2 text-2xl rounded-lg"
          />

          {/* Phone Number */}
          <label htmlFor="phone_number" className="text-2xl mt-5">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Phone Number"
            className="block border mx-auto border-gray-400 w-[50%] mt-2 px-2 py-2 text-2xl rounded-lg"
          />

         {/*Role*/}
          <label htmlFor="role" className="text-2xl mt-5">
            Role:
          </label>
          <input
            type="text"
            id="role"
            name="role"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Role"
            className="block border mx-auto border-gray-400 w-[50%] mt-2 px-2 py-2 text-2xl rounded-lg"
            value={"USER"}
          />

          {/* Address */}
          <label htmlFor="address" className="text-2xl mt-5">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Address"
            className="block border mx-auto border-gray-400 w-[50%] mt-2 px-2 py-2 text-2xl rounded-lg"
          />

          {/* Department ID */}
          <label htmlFor="departement_id" className="text-2xl mt-5">
            Department ID:
          </label>
         <SelectDepartement handleChange={(e)=>handleChange(e)} className="bg-slate-200 p-3 rounded-lg w-[30%] text-2xl"/>

          {/* Password */}
          <label htmlFor="password" className="text-2xl mt-5">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Password"
            className="block border mx-auto border-gray-400 w-[50%] mt-2 px-2 py-2 text-2xl rounded-lg"
          />

          {/* Picture (optional) */}
          <label htmlFor="picture" className="text-2xl mt-5">
            Picture (Optional):
          </label>
          <input
            type="text"
            id="picture"
            name="picture"
            onChange={(e) => handleChange(e)}
            placeholder="Picture URL"
            className="block border mx-auto border-gray-400 w-[50%] mt-2 px-2 py-2 text-2xl rounded-lg"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[40%] bg-sky-300 py-3 text-2xl rounded-xl mt-10"
          >
            Create User
          </button>
        </form>
      </div>
    </ModalComponent>
  );
}
