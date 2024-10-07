import { UserT } from "@/lib/interface";
import NoUsers from "./NoUsers";
import { useNavigate } from "react-router-dom";

export default function UsersArray({ users }: { users: UserT[] }) {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] min-h-[80vh] mx-auto 2xl:mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wider border-b border-gray-200">
          <tr>
            <th className="px-6 py-4">#</th>
            <th className="px-6 py-4">Nom</th>
            <th className="px-6 py-4">Prénom</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Téléphone</th>
            <th className="px-6 py-4">Département</th>
            <th className="px-6 py-4">Rôle</th>
            <th className="px-6 py-4">En Congé</th>
          </tr>
        </thead>
        {users.length === 0 ? (
          <NoUsers />
        ) : (
          <>
            <tbody className="text-gray-600">
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-all border-b border-gray-100"
                >
                  <td className="px-6 py-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4">{user.first_name}</td>
                  <td className="px-6 py-4">{user.last_name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone_number}</td>
                  <td className="px-6 py-4">{user.departement_id}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4 text-center">
                    {user.in_Conger ? (
                      <span className="text-green-500 font-semibold">Oui</span>
                    ) : (
                      <span className="text-red-500 font-semibold">Non</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <div className="w-full text-center pb-10 absolute lg:mt-5 2xl:mt-10">
              <button
                onClick={() => navigate("/create-user")}
                className="bg-sky-600 lg:py-2 2xl:py-3 lg:px-7 2xl:px-8 text-white lg:text-lg 2xl:text-xl font-medium rounded-lg lg:mt-12 2xl:mt-16 hover:bg-transparent hover:border-2 hover:border-sky-600 hover:text-sky-600"
              >
                Ajouter
              </button>
            </div>
          </>
        )}
      </table>
    </div>
  );
}
