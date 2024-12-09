// SelectDepartement.tsx
import { useAxiosWithToken } from "@/lib/interceptor";
import { DepartementT } from "@/lib/interface";
import { useEffect, useState } from "react";

interface PropsT {
  className?: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectDepartement({ className, handleChange }: PropsT) {
  const axios = useAxiosWithToken();
  const [departements, setDepartements] = useState<DepartementT[]>();
  const [value, setValue] = useState<string>("");

  const fetchData = async () => {
    try {
      const res = await axios.get("/departement");
      if (res.status === 200) {
        setDepartements(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <select
        className={className}
        name="departement_id"
        onChange={handleChange}
        onClick={() => setValue("click")}
      >
        {value === "" && <option value={""}>Select Department</option>}
        {departements?.map((dep) => (
          <option key={dep.departementModel.id} value={dep.departementModel.id}>
            {dep.departementModel.name}
          </option>
        ))}
      </select>
    </div>
  );
}
