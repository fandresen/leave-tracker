import { getDateByDate, numberToMonth } from "@/lib/numberTomonth";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { SelectAffichage } from "../ui/SelectAffichage";

export interface events {
  id: number;
  title: string;
  start: string;
  end: string;
}
export interface calendardataT {
  year: number;
  month: number;
  calendarDays: [
    {
      date: string;
      inMonth: boolean;
    }
  ];
}

interface propsT {
  events: events[];
  calendarData: calendardataT;
  prevMonth:()=>void;
  nextMonth:()=>void;
  toDayDate:()=>void;
}

const MyCalendar = ({ events, calendarData,nextMonth,prevMonth,toDayDate }: propsT) => {
  const today = new Date().getUTCDate().toString();
  console.log(today);
  const rows = [];
  const daysPerWeek = 7;
  if (calendarData && Array.isArray(calendarData.calendarDays)) {
    const totalDays = calendarData.calendarDays.length;

    // Diviser les jours en semaines
    for (let i = 0; i < totalDays; i += daysPerWeek) {
      const week = calendarData.calendarDays.slice(i, i + daysPerWeek);
      rows.push(week);
    }
  }

  return (
    <>
      <div className="flex justify-between mb-5">
        <div className="flex">
        <button className="mx-10  text-lg px-3 border-[3px] border-sky-300 hover:bg-sky-300 hover:text-white rounded-xl" onClick={toDayDate}>Today</button>
          <button>
            <GrPrevious className="mt-1 mr-2 text-black" onClick={prevMonth}/>
          </button>
          <button>
            <GrNext className="mt-1 ml-2 text-black" onClick={nextMonth}/>
          </button>
        </div>
        <div className="mt-3 text-sm- 2xl:text-2xl font-semibold text-[#333]">
          {numberToMonth(calendarData.month)}
          {` ${calendarData.year}`}
        </div>
        <div className="mt-3">
          <SelectAffichage />
        </div>
      </div>
      <div>
        <table className="w-full h-[70vh] border border-gray-200 bg-white">
          <thead>
            <tr className="text-center font-normal text-black">
              <td className="py-2 2xl:py-4 w-[14%] text-lg 2xl:text-2xl border border-gray-100">Dimanche</td>
              <td className=" w-[14%] text-lg 2xl:text-2xl">Lundi</td>
              <td className=" w-[14%] text-lg 2xl:text-2xl">Mardi</td>
              <td className=" w-[14%] text-lg 2xl:text-2xl">Mercredi</td>
              <td className=" w-[14%] text-lg 2xl:text-2xl">Jeudi</td>
              <td className=" w-[14%] text-lg 2xl:text-2xl">Vendredi</td>
              <td className=" w-[14%] text-lg 2xl:text-2xl">Samedi</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((week, index) => (
              <tr key={index} className=" border ">
                {week.map((day) => (
                  <td key={day.date} className={`border border-sky-100 text-sm 2xl:text-lg ${!day.inMonth?"bg-slate-100":""} ${getDateByDate(day.date)==today?"bg-blue-200":""}`}>{<h1 className="float-right text-gray-500 mr-3 2xl:mr-5 -mt-8 2xl:-mt-16">{getDateByDate(day.date)}</h1>}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCalendar;
