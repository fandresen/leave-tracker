
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  // interface propsT{
  //   handleChangeValue: (value: string) => void;
  // }
  
  export function SelectAffichage() {
    return (
      // <Select onValueChange={(e)=>handleChangeValue(e)}>
      <Select>
        <SelectTrigger className="w-[11vw] py-6 rounded-[8px] bg-white text-lg 2xl:text-xl border border-gray-200">
  
          <SelectValue placeholder="Mode d'affichage" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="week" className="text-xl cursor-pointer">Semaine</SelectItem>
            <SelectItem value="month"className="text-xl cursor-pointer">Mois</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
  