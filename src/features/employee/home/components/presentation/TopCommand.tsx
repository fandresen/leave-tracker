import { calendardataT } from "@/lib/interface";
import { SelectAffichage } from "../ui/SelectAffichage";
import { GrNext, GrPrevious } from "react-icons/gr";
import { numberToMonth } from "@/lib/others";

interface propsT {
  SwitchType: (type: "month" | "week") => void;
  toDayDate: () => void;
  prevMonth: () => void;
  nextMonth: () => void;
  calendarMonthData: calendardataT;
  nextWeek?: () => void;
  prevWeek?: () => void;
}
export default function TopCommand({ SwitchType,calendarMonthData,nextMonth,prevMonth,toDayDate}: propsT) {
  return (
    <div className="flex w-full justify-between">
        <div className="flex ">
          <button
            className="mx-10 text-lg px-3 border-[3px] border-sky-300 hover:bg-sky-300 hover:text-white rounded-xl"
            onClick={toDayDate}
          >
            Today
          </button>
          <button>
            <GrPrevious
              className="mt-1 mr-2 text-black dark:text-white"
              onClick={prevMonth}
            />
          </button>
          <button>
            <GrNext
              className="mt-1 ml-2 text-black dark:text-white"
              onClick={nextMonth}
            />
          </button>
        </div>
        <div className="mt-3 text-sm- 2xl:text-2xl font-semibold text-[#333] dark:text-zinc-300">
          {numberToMonth(calendarMonthData.month)}
          {` ${calendarMonthData.year}`}
        </div>
      <SelectAffichage handleChangeValue={SwitchType} />
    </div>
  );
}
