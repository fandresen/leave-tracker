import { formDatacreatetionEntreprise } from "@/lib/interface";

interface propsT {
    formData: formDatacreatetionEntreprise;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | React.ChangeEventHandler<HTMLSelectElement>;
  }
export default function StepThree({ formData, handleChange }:propsT) {
    return (
      <div>
        <div className="lg:mt-10 2xl:mt-16 mb-24 w-[60%] mx-auto">
          <label className="block text-sm font-medium text-gray-700">Type de license</label>
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange as React.ChangeEventHandler<HTMLSelectElement>}
            className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-[#7BE8D7] focus:border-[#7BE8D7]"
          >
            <option value="">Choisir une option</option>
            <option value="basic">1 ans</option>
            <option value="premium">3 ans</option>
            <option value="enterprise">5 ans</option>
          </select>
        </div>
      </div>
    );
  }
  