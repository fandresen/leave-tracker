import { useHomeContext } from "../../Context/HomeContext";
import SelectDepartement from "./SelectDepartement";

export default function TopBar() {
  const { openDepModal,openUserModal } = useHomeContext();
  const newDepClick =()=>{
    openDepModal();
  }
  const newUserClick = ()=>{
    openUserModal();
  }
  return (
    <div>
      <table className="w-[90%] mx-auto h-16 my-[1vh]">
        <thead>
          <tr className="text-xl bg-green-200">
            <th>
              <SelectDepartement className="bg-transparent"/>
            </th>
            <th>
              <button onClick={newDepClick}>New Departement</button>
            </th>
            <th>
              <button onClick={newUserClick}>New User</button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
