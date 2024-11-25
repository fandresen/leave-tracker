import { CreationDepartementT } from "@/lib/interface";

interface propsT {
  formData: CreationDepartementT;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
export default function StepTwoDepartement({ formData, handleChange }: propsT) {
  return (
    <div className="mx-auto">
      <div className="mb-6 lg:w-[80%] 2xl:w-[80%] mx-auto">
        <label className="block text-xs 2xl:text-sm roboto text-gray-700">
          Addresse
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full px-4 lg:py-[5.5px] 2xl:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>

      <div className="mb-6 lg:w-[80%] 2xl:w-[80%] mx-auto">
        <label className="block text-xs 2xl:text-sm roboto text-gray-400">
          <span className="text-gray-700">Email</span> chef de departement
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-4 lg:py-[5.5px] 2xl:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>

      <div className="mb-6 lg:w-[80%] 2xl:w-[80%] mx-auto">
        <label className="block text-xs 2xl:text-sm roboto text-gray-400">
          <span className="text-gray-700">Numéro téléphone</span> chef de
          departement
        </label>
        <input
          type="tel"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          className="mt-1 block w-full px-4 lg:py-[5.5px] 2xl:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>
    </div>
  );
}
