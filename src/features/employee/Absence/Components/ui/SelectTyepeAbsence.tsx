
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
      <SelectTrigger className="w-[11vw] py-6 rounded-[8px] bg-white text-lg 2xl:text-xl border border-gray-200">

        <SelectValue placeholder="Type d'absence" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectItem value="conger_annuel" className="text-xl cursor-pointer">Conger annuel</SelectItem>
          <SelectItem value="absence_ordinaire"className="text-xl cursor-pointer">Absence ordinaire</SelectItem>
          <SelectItem value="conger_de_maladie"className="text-xl cursor-pointer">Conger de maladie</SelectItem>
          <SelectItem value="conger_pour_formation"className="text-xl cursor-pointer">Conger pour formation</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
