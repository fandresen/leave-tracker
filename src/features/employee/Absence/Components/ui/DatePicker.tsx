import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../../../../../components/ui/calendar";

//interface for handleSelect function
interface propsT {
  handleSelectValue: (value?: Date) => void;
  pastDate?: Date;
  clasName?: string;
  defaultValue?:Date;
}
export function DatePicker({ handleSelectValue, pastDate, clasName,defaultValue }: propsT) {
  const [date, setDate] = React.useState<Date>(defaultValue!);
  const today = new Date();

  const handleSelect = (value?: Date) => {
    setDate(value!);
    handleSelectValue(value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            clasName,
            " py-2 rounded-[8px] justify-start 2xl:text-md text-left font-normal bg-white border border-gray-200",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Choisir une date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lg:scale-75 lg:-mt-10 2xl:-mt-0 2xl:scale-100 w-auto p-0 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(value) => handleSelect(value)}
          initialFocus
          disabled={(date) =>
            date < new Date(today.getTime() - 24 * 60 * 60 * 1000) ||
            date < pastDate!
          } //Today shouldn't de disabled
        />
      </PopoverContent>
    </Popover>
  );
}
