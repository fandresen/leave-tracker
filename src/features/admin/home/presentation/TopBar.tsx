import { FaPlus } from "react-icons/fa";
import { useHomeContext } from "../../Context/HomeContext";
import { AiOutlineDown } from "react-icons/ai";
import Research from "@/components/Research";

export default function TopBar() {
  const { openUserModal } = useHomeContext();

  const newUserClick = () => {
    openUserModal();
  };

  return (
    <div className="w-full px-10 mx-auto mt-6 mb-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center py-5">
        {/* Select Department Dropdown */}
        <div className="">
          <button className="border border-gray-300 py-1 px-5 text-xs font-medium flex rounded-sm shadow-md">
            Fltre <AiOutlineDown className="mt-1 ml-2" />
          </button>
        </div>

        {/* New Department Button */}
        <div className="ml-4">
          <Research className="w-[400px] text-sm" />
        </div>

        {/* New User Button */}
        <div className="ml-4">
          <button
            onClick={newUserClick}
            className="px-3 py-2 text-xs flex bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 cursor-pointer"
          >
            <FaPlus className="mt-1 mr-1" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
