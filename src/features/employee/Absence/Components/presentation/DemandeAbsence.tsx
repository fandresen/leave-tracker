import { DatePicker } from "@/features/employee/Absence/Components/ui/DatePicker";
import { SelectTypeAbsence } from "../ui/SelectTyepeAbsence";

interface propsT{
  handleTypeAbsencechange: (value: string) => void;
  handleStartDate: (value?: Date) => void;
  handleEndDate: (value?: Date) => void;
  handleSubmit: (e:React.FormEvent) => void;
  startDate: Date;
  endDate:Date;
}
export default function DemandeAbsence({handleEndDate,handleStartDate,handleTypeAbsencechange,handleSubmit,startDate}:propsT) {
  return (
    <div className="w-full h-full">
      <h1 className="text-[2.5vw] mt-[5vh] ml-[1vw] font-medium text-gray-600">Demande d'absence</h1>
      <div className="w-[90%] mx-auto">
        <form className="flex gap-5 mt-[15vh] justify-between" onSubmit={(e)=>handleSubmit(e)}>
            <div>
            <label className="block text-xl font-semibold mb-2">Type d'absence</label>
                <SelectTypeAbsence handleChangeValue={(value)=>handleTypeAbsencechange(value)}/>
            </div>
          <div>
            <label className="block text-xl mb-2">Date début</label>
            <DatePicker handleSelectValue={(value)=>handleStartDate(value)}/>
          </div>
          <div>
            <label className="block text-xl mb-2">Date fin</label>
            <DatePicker handleSelectValue={(value)=>handleEndDate(value)} pastDate={startDate}/>
          </div>

          <button type="submit" className="w-[180px] h-16 p-3 text-xl text-[#333] rounded-xl mt-7 bg-[#7BE8D7] hover:bg-[#68c2b4] hover:text-[#ffffff]">Confirmer</button>
        </form>
      </div>
    </div>
  );
}
