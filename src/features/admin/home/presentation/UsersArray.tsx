
export default function UsersArray() {
  const users = [
    { first_name: "Antokiniaina", last_name: "Fandresena", email: "extractor@gmail.com",phone:"03478187442", departemnt:"Village de l'emploie",inConger:false },
    { first_name: "John", last_name: "Doe", email: "john.doe@example.com",phone:"03478187442", departemnt:"Village de l'emploie",inConger:false },
    { first_name: "Jane", last_name: "Smith", email: "jane.smith@example.com",phone:"03478187442", departemnt:"Village de l'emploie",inConger:false }
  ];
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
                <th>EnConger</th>
              </tr>
            </thead>
            <tbody>
                {
                  users.map((user, index) => (
                    <tr key={index} className="text-2xl">
                      <td>{index + 1}</td>
                      <td>{user.last_name}</td>
                      <td>{user.first_name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.departemnt}</td>
                      <td>{user.inConger? "Oui" : "Non"}</td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
    </div>
  )
}
