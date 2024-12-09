import { DepartementT } from "@/lib/interface";
import { BiSearch } from "react-icons/bi"; // Loupe (search icon)

interface propsT {
  className?: string;
  data?: DepartementT[];
  filteredData: (data: DepartementT[]) => void;
}

const Research = ({ className = "", data, filteredData }: propsT) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toUpperCase();
    const filterdData = data?.filter((element) =>
      element.departementModel.name.includes(query)
    );
    filteredData(filterdData!);
  };

  return (
    <div
      className={`flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm ${className}`}
    >
      <BiSearch className="text-gray-500 mr-2" size={20} />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search..."
        className="w-full outline-none bg-transparent text-gray-700"
      />
    </div>
  );
};

export default Research;
