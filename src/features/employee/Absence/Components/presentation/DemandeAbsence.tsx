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
    <div className="w-full">
      
      <div className="w-[90%]">
        <form className="flex gap-5 mt-[13vh] justify-between" onSubmit={(e)=>handleSubmit(e)}>
            <div>
            <label className="block text-lg font-semibold mb-2">Type d'absence</label>
                <SelectTypeAbsence handleChangeValue={(value)=>handleTypeAbsencechange(value)}/>
            </div>
          <div>
            <label className="block text-lg mb-2">Date début</label>
            <DatePicker clasName="w-[15vw]" handleSelectValue={(value)=>handleStartDate(value)}/>
          </div>
          <div>
            <label className="block text-lg mb-2">Date fin</label>
            <DatePicker clasName="w-[15vw]" handleSelectValue={(value)=>handleEndDate(value)} pastDate={startDate}/>
          </div>

          <button type="submit" className="w-[180px]  px-3 text-md text-white rounded-xl mt-7 bg-sky-600 hover:bg-sky-700 hover:text-[#ffffff]">Confirmer</button>
        </form>
      </div>
    </div>
  );
}
