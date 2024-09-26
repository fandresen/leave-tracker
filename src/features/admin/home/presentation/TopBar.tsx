import { useHomeContext } from "../../Context/HomeContext";
import SelectDepartement from "./SelectDepartement";

export default function TopBar() {
  const { openDepModal, openUserModal } = useHomeContext();

  const newDepClick = () => {
    openDepModal();
  };

  const newUserClick = () => {
    openUserModal();
  };

  return (
    <div className="w-[90%] mx-auto mt-6 mb-4">
      <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
        {/* Select Department Dropdown */}
        <div className="flex-1">
          <SelectDepartement className="w-[20%] p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        {/* New Department Button */}
        <div className="ml-4">
          <button
            onClick={newDepClick}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
          >
            New Department
          </button>
        </div>

        {/* New User Button */}
        <div className="ml-4">
          <button
            onClick={newUserClick}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
          >
            New User
          </button>
        </div>
      </div>
    </div>
  );
}
