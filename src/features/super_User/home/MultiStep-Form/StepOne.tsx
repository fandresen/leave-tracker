import { formDatacreatetionEntreprise } from "@/lib/interface";

interface propsT {
  formData: formDatacreatetionEntreprise;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
export default function StepOne({ formData, handleChange }: propsT) {
  return (
    <div className="lg:mt-10 2xl:mt-16 mx-auto">
      <div className="mb-6 lg:w-[70%] mx-auto">
        <label className="block text-sm font-medium text-gray-700">
          Nom de l'entreprise
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>

      <div className="mb-6 lg:w-[70%] mx-auto">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>
    </div>
  );
}
