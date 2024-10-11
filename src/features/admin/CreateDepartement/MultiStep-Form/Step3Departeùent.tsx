import { UserT } from "@/lib/interface";
import SelectDepartement from "../../home/presentation/SelectDepartement";

interface propsT {
  formData: UserT;
  handleChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | React.ChangeEventHandler<HTMLSelectElement>;
}
export default function StepThreeDepartement({ formData, handleChange }: propsT) {
  return (
    <div>
      <div className="lg:mt-10 2xl:mt-16 mb-24 w-[60%] mx-auto">
        <SelectDepartement handleChange={handleChange as React.ChangeEventHandler<HTMLSelectElement>} className="lg:mb-5 2xl:mb-10"/>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange as React.ChangeEventHandler<HTMLSelectElement>}
          className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-[#7BE8D7] focus:border-[#7BE8D7]"
        >
          <option value="">Choisir une option</option>
          <option value="AMDIN">ADMIN</option>
          <option value="USER" defaultValue={"USER"}>EMPLOYEE</option>
          <option value="CHEF_DEP">CHEF DEPARTEMENT</option>
        </select>
      </div>
    </div>
  );
}
