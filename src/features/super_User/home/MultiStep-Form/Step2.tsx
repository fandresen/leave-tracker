import { formDatacreatetionEntreprise } from "@/lib/interface";

interface propsT {
    formData: formDatacreatetionEntreprise;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
  }
export default function StepTwo({ formData, handleChange }:propsT) {
    return (
      <div className="lg:mt-10 2xl:mt-16">
        <div className="mb-6 w-[70%] mx-auto">
          <label className="block text-sm font-medium text-gray-700">Adresse</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
          />
        </div>
  
        <div className="mb-6 w-[70%] mx-auto">
          <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
          />
        </div>
      </div>
    );
  }
  