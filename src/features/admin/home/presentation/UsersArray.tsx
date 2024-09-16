import { UserT } from "@/lib/interface";

export default function UsersArray({users}:{users:UserT[]}) {
  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }
  return (
    <div className="w-[90%] mx-auto">
        <table className="w-full">
            <thead>
              <tr className="text-xl text-left bg-gray-300">
                <th className="">ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Role</th>
                <th>EnConger</th>
              </tr>
            </thead>
            <tbody>
                {
                  users.map((user, index) => (
                    <tr key={index} className="text-2xl">
                      <td>{index + 1}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone_number}</td>
                      <td>{user.departement_id}</td>
                      <td>{user.role}</td>  
                      <td>{user.in_Conger? "Oui" : "Non"}</td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
    </div>
  )
}
