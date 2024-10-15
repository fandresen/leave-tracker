import { CreationDepartementT } from "@/lib/interface";

interface propsT {
  formData: CreationDepartementT;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
export default function StepOneDepartement({ formData, handleChange }: propsT) {
  return (
    <div className="lg:mt-10 2xl:mt-16 mx-auto">
      <div className="mb-6 lg:w-[80%] 2xl:w-[96%] mx-auto">
        <label className="block text-xs 2xl:text-sm text-gray-700 roboto">
          Nom du departement
        </label>
        <input
          type="text"
          name="departement_name"
          value={formData.departement_name}
          onChange={handleChange}
          className="mt-1 block w-full px-4 lg:py-[5.5px] 2xl:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>
      <div className="flex 2xl:gap-3 max-w-[40vw] mx-auto">
        <div className="mb-6 lg:w-[45%] 2xl:w-[45%] mx-auto">
          <label className="block text-xs 2xl:text-sm text-gray-400 roboto">
            <span className="text-gray-700">Nom</span> du chef de departement
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 lg:py-[5.5px] 2xl:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
          />
        </div>

        <div className="mb-6 lg:w-[45%] 2xl:w-[45%] mx-auto">
          <label className="block text-xs 2xl:text-sm text-gray-400 roboto">
          <span className="text-gray-700">Prenom</span> du chef de departement
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 lg:py-[5.5px] 2xl:py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-sky-600 focus:border-sky-600 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
