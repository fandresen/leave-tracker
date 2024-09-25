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
            <label className="block lg:text-sm 2xl:text-lg font-medium mb-2">Type d'absence</label>
                <SelectTypeAbsence handleChangeValue={(value)=>handleTypeAbsencechange(value)}/>
            </div>
          <div>
            <label className="block lg:text-sm 2xl:text-lg mb-2">Date début</label>
            <DatePicker clasName="w-[15vw]" handleSelectValue={(value)=>handleStartDate(value)}/>
          </div>
          <div>
            <label className="block lg:text-sm 2xl:text-lg mb-2">Date fin</label>
            <DatePicker clasName="w-[15vw]" handleSelectValue={(value)=>handleEndDate(value)} pastDate={startDate}/>
          </div>

          <button type="submit" className="lg:w-[100px] 2xl:w-[180px]  lg:px-3 lg:text-[12px] 2xl:text-[15px] text-white rounded-xl mt-7 font-medium bg-sky-600 hover:bg-sky-700 hover:text-[#ffffff]">Confirmer</button>
        </form>
      </div>
    </div>
  );
}
