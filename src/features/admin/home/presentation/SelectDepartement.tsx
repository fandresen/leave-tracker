import { useAxiosWithToken } from "@/lib/interceptor";
import { DepartementT } from "@/lib/interface";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface PropsT {
  className?: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectDepartement({ className, handleChange }: PropsT) {

  const [departements, setDepartements] = useState<DepartementT[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");



  return (
    <div className="w-full">
      <label htmlFor="departement" className="block text-sm font-medium text-gray-700 mb-2">
        Select Department
      </label>
      <select
        id="departement"
        name="departement_id"
        className={`block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e);
        }}
      >
        {/* Display loading state or default option */}
        {isLoading ? (
          <option value="">Loading departments...</option>
        ) : (
          <>
            <option value="">Select Department</option>
            {departements.map((dep) => (
              <option key={dep.id} value={dep.id}>
                {dep.name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
}
