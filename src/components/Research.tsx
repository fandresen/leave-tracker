import { BiSearch } from 'react-icons/bi'; // Loupe (search icon)

const Research = ({ className = '' }) => {
  return (
    <div className={`flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm ${className}`}>
      <BiSearch className="text-gray-500 mr-2" size={20} />
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none bg-transparent text-gray-700"
      />
    </div>
  );
};

export default Research;
