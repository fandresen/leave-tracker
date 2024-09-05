import { useHomeContext } from "../../Context/HomeContext";

export default function TopBar() {
  const { openDepModal } = useHomeContext();
  const newDepClick =()=>{
    openDepModal();
  }
  return (
    <div>
      <table className="w-[90%] mx-auto h-16 my-[1vh]">
        <thead>
          <tr className="text-xl bg-green-200">
            <th>
              <select name="Deaprtement" id="departement" className="bg-transparent">
                <option value="">Select Department</option>
                <option value="Village de l'emploie">Village de l'emploie</option>
                <option value="Ecole">Ecole</option>
                <option value="Autre">Autre</option>
              </select>
            </th>
            <th>
              <button onClick={newDepClick}>New Departement</button>
            </th>
            <th>
              <button>New User</button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
