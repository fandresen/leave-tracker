import { useNavigate } from "react-router-dom";
import NoEntreprise from "./NoEntreprise";
// import TopBarEntreprise from "./TopBarEntreprise";

export default function ListeEntrerpise({entrerpises}) {
  const navigate = useNavigate()
  return (
    <div className="w-[90%] mx-auto">
        {/* <TopBarEntreprise/> */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left bg-gray-100 text-gray-700 uppercase text-sm tracking-wider border-b border-gray-200">
            <th className="py-4 px-6">#</th>
            <th className="py-4 px-6">Entreprise</th>
            <th className="py-4 px-6">Address</th>
            <th className="py-4 px-6">Email</th>
            <th className="py-4 px-6">Employee</th>
          </tr>
        </thead>
        {entrerpises.length === 0 ? (
          <NoEntreprise />
        ) : (
          <>
            <tbody>
              {entrerpises.map((entrerpise, index) => (
                <tr
                  key={index}
                  className="lg:text-lg 2xl:text-xl text-gray-600 border-b border-b-gray-100 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-5 px-6">{index + 1}</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={entrerpise.logo}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                      <h1 className="text-lg">{entrerpise.name}</h1>
                    </div>
                  </td>
                  <td className="py-5 px-6">{entrerpise.address}</td>
                  <td className="py-5 px-6">{entrerpise.email}</td>
                  <td className="py-5 px-6">{entrerpise.employeeNumber}</td>
                </tr>
              ))}
            </tbody>
            <div className="w-[90vw] text-center absolute lg:mt-5 2xl:mt-10">
            <button onClick={()=>navigate('/create-entreprise')} className="bg-sky-600 lg:py-2 2xl:py-3 lg:px-7 2xl:px-8 text-white lg:text-lg 2xl:text-xl font-medium rounded-lg lg:mt-4 2xl:mt-6 hover:bg-transparent hover:border-2 hover:border-sky-600 hover:text-sky-600">
              Ajouter
            </button>
            </div>
          
          </>
        )}
      </table>
    </div>
  );
}
