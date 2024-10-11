import { UserDTO} from "@/lib/interface";
import SingleEmployeeCard from "./SingleEmployeeCard";

interface propsT{
    employees : UserDTO[]
}
export default function ListDepEmployee({employees}:propsT) {
  return (
    <div className="bg-white rounded-xl max-h-[20vw] ml-5">
      <h1 className="text-xl text-gray-600">Liste des employés du département</h1>
        {
            employees.map((employee) => (
               <SingleEmployeeCard key={employee.id} email={employee.email} firstName={employee.firstname} lastName={employee.lastname} url={employee.profilePictureUrl}/>
            ))
        }
    </div>
  )
}
