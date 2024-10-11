import { UserT } from "@/lib/interface";

interface propsT {
  formData: UserT;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
export default function StepOneDepartement({ formData, handleChange }: propsT) {
  return (
    <div className="lg:mt-10 2xl:mt-16 mx-auto">
       <div className="mb-6 lg:w-[70%] mx-auto">
        <label className="block text-sm font-medium text-gray-700">
          Nom du departement
        </label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>
      <div className="mb-6 lg:w-[70%] mx-auto">
        <label className="block text-sm font-medium text-gray-700">
          Nom
        </label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>

      <div className="mb-6 lg:w-[70%] mx-auto">
        <label className="block text-sm font-medium text-gray-700">Prenom</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-sky-600 focus:border-sky-600 shadow-sm"
        />
      </div>
    </div>
  );
}
