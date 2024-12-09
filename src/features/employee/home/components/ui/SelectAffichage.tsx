
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { propsT } from "@/lib/interface"
  
  export function SelectAffichage({handleChangeValue}: propsT) {
    return (
      <Select onValueChange={(e:"month"|"week")=>handleChangeValue(e)}>
        <SelectTrigger className="lg:w-[11vw] 2xl:py-6 rounded-[8px] bg-white lg:text-sm 2xl:text-xl border border-gray-200">
          <SelectValue placeholder="Mode d'affichage" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectItem value="week" className="lg:text-sm 2xl:text-lg cursor-pointer">Semaine</SelectItem>
            <SelectItem value="month"className="lg:text-sm 2xl:text-lg cursor-pointer">Mois</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
  