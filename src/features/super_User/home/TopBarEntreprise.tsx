import { useState } from "react";

export default function TopBarEntreprise({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [employeeFilter, setEmployeeFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Passer le terme de recherche au parent
  };

  const handleFilterChange = (e) => {
    setEmployeeFilter(e.target.value);
    onFilter(e.target.value); // Passer la valeur du filtre au parent
  };

  return (
    <div className="flex justify-between items-center my-4">
      
      {/* Filtre sur le nombre d'employés */}
      <select
        value={employeeFilter}
        onChange={handleFilterChange}
        className="w-[30%] lg:w-[20%] px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        <option value="">Filtrer par employés</option>
        <option value="50">+50 employés</option>
        <option value="100">+100 employés</option>
        <option value="200">+200 employés</option>
      </select>
      <input
        type="text"
        placeholder="Rechercher une entreprise..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-[60%] lg:w-[40%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7BE8D7]"
      />
    </div>
  );
}
