
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface propsT{
  handleChangeValue: (value: string) => void;
}

export function SelectTypeAbsence({handleChangeValue}:propsT) {
  return (
    <Select onValueChange={(e)=>handleChangeValue(e)}>
      <SelectTrigger className="lg:w-[12vw] 2xl:w-[14vw] 2xl:py-2 rounded-[8px] bg-white lg:text-[13px] 2xl:text-[15px] border border-gray-200">

        <SelectValue placeholder="Type d'absence"/>
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectItem value="conger_annuel" className="lg:text-sm 2xl:text-md cursor-pointer">Conger annuel</SelectItem>
          <SelectItem value="absence_ordinaire"className="lg:text-sm 2xl:text-md cursor-pointer">Absence ordinaire</SelectItem>
          <SelectItem value="conger_de_maladie"className="lg:text-sm 2xl:text-md cursor-pointer">Conger de maladie</SelectItem>
          <SelectItem value="conger_pour_formation"className="lg:text-sm 2xl:text-md cursor-pointer">Conger pour formation</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
