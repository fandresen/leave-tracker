import React from 'react';

interface DepartementComponentProps {
  departmentNumber: number;
  departmentName: string;
  employeeCount: number;
  className?: string;
}

const DepartementComponent: React.FC<DepartementComponentProps> = ({ 
  departmentNumber, 
  departmentName, 
  employeeCount, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center justify-between bg-white p-4 mt-2 w-[90%] 2xl:w-[85%] mx-auto cursor-pointer rounded-lg shadow-lg hover:bg-sky-50 border border-gray-200 transition-shadow duration-300 ease-in-out ${className}`}>
      {/* Numéro du département */}
      <div className="flex items-center justify-center text-blue-600 rounded-full font-bold text-sm 2xl:text-lg">
        #{departmentNumber}
      </div>

      {/* Nom du département */}
      <div className="flex-1 mx-4 text-gray-700">
        <h2 className="text-sm 2xl:text-lg roboto roboto-medium">{departmentName}</h2>
      </div>

      {/* Nombre d'employés */}
      <div className="text-gray-500 text-sm">
        {employeeCount} {employeeCount > 1 ? 'Employees' : 'Employee'}
      </div>
    </div>
  );
};

export default DepartementComponent;
