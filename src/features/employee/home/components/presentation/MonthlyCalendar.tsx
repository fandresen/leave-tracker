import { propsTMonths } from "@/lib/interface";
import { dateToYMDString, getDateByDate, numberToMonth } from "@/lib/others";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const MonthlyCalendar = ({
  calendarMonthData,
  nextMonth,
  prevMonth,
  toDayDate,
  handleDayClick,
  isConger,
  isPastDate,
}: propsTMonths) => {
  const today = new Date().toString();
  const rows = [];
  const daysPerWeek = 7;
  if (calendarMonthData && Array.isArray(calendarMonthData.calendarDays)) {
    const totalDays = calendarMonthData.calendarDays.length;

    // Diviser les jours en semaines
    for (let i = 0; i < totalDays; i += daysPerWeek) {
      const week = calendarMonthData.calendarDays.slice(i, i + daysPerWeek);
      rows.push(week);
    }
  }

  return (
    <>
      <div className="flex gap-5 mb-5">
        <div className="flex">
          <button
            className="mx-10  text-lg px-3 border-[3px] border-sky-300 hover:bg-sky-300 hover:text-white rounded-xl"
            onClick={toDayDate}
          >
            Today
          </button>
          <button>
            <GrPrevious className="mt-1 mr-2 text-black" onClick={prevMonth} />
          </button>
          <button>
            <GrNext className="mt-1 ml-2 text-black" onClick={nextMonth} />
          </button>
        </div>
        <div className="mt-3 text-sm- 2xl:text-2xl font-semibold text-[#333]">
          {numberToMonth(calendarMonthData.month)}
          {` ${calendarMonthData.year}`}
        </div>
      </div>
      <div>
        <table className="w-full h-[70vh] border border-gray-200 bg-white">
          <thead>
            <tr className="text-center font-normal text-black">
              <td className="py-2 2xl:py-4 w-[14%] text-sm 2xl:text-ls border border-gray-100">
                Dimanche
              </td>
              <td className=" w-[14%] text-sm 2xl:text-lg" >Lundi</td>
              <td className=" w-[14%] text-sm 2xl:text-lg">Mardi</td>
              <td className=" w-[14%] text-sm 2xl:text-lg">Mercredi</td>
              <td className=" w-[14%] text-sm 2xl:text-lg">Jeudi</td>
              <td className=" w-[14%] text-sm 2xl:text-lg">Vendredi</td>
              <td className=" w-[14%] text-sm 2xl:text-lg">Samedi</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((week, index) => (
              <tr key={index} className=" border ">
                {week.map((day) => (
                  <td
                    key={day.date}
                    className={`border border-sky-100 relative hover:bg-sky-50 text-sm 2xl:text-lg ${
                      !isPastDate(day.date)
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } ${!day.inMonth ? "bg-slate-100" : ""}
                    ${day.date == dateToYMDString(today) ? "bg-blue-200" : ""}`}
                    onClick={() => handleDayClick(day.date)}
                  >
                    <div className=" min-h-[13vh]">
                      <h1 className="text-right text-gray-500 mr-2 2xl:mr-5  2xl:mt-2">
                        {getDateByDate(day.date)}
                      </h1>
                      <div className="absolute w-full right-0 left-0">{isConger(day.date)}</div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MonthlyCalendar;
