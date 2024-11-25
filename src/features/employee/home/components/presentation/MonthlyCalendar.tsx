import { propsTMonths } from "@/lib/interface";
import { dateToYMDString, getDateByDate} from "@/lib/others";
import "react-big-calendar/lib/css/react-big-calendar.css";

const MonthlyCalendar = ({
  calendarMonthData,
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
      <div className="p-4">
        <table className="w-full h-[70vh] border dark:border-gray-500 border-gray-200">
          <thead className=" bg-sky-700/80 dark:bg-sky-200">
            <tr className="text-center font-normal text-white">
              <td className="w-[14%] p-1 text-xs 2xl:text-sm font-light">Dimanche</td>
              <td className=" w-[14%] text-xs 2xl:text-sm font-light">Mardi</td>
              <td className=" w-[14%] text-xs 2xl:text-sm font-light">Lundi</td>
              <td className=" w-[14%] text-xs 2xl:text-sm font-light">Mercredi</td>
              <td className=" w-[14%] text-xs 2xl:text-sm font-light">Jeudi</td>
              <td className=" w-[14%] text-xs 2xl:text-sm font-light">Vendredi</td>
              <td className=" w-[14%] text-xs 2xl:text-sm font-light">Samedi</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((week, index) => (
              <tr key={index} className=" border ">
                {week.map((day) => (
                  <td
                    key={day.date}
                    className={`border border-sky-100 dark:border-sky-900 relative z-0 hover:bg-sky-50 dark:hover:bg-gray-400  text-sm 2xl:text-lg ${
                      !isPastDate(day.date)
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } ${!day.inMonth ? "bg-gray-100 dark:bg-slate-500" : "bg-white dark:bg-gray-500"}
                    ${day.date == dateToYMDString(today) ? "bg-blue-300" : ""}`}
                    onClick={() => handleDayClick(day.date)}
                  >
                    <div className=" min-h-[13vh]">
                      <h1 className="text-right text-gray-600 dark:text-white mr-2 2xl:mr-5  2xl:mt-2">
                        {getDateByDate(day.date)}
                      </h1>
                      <div className="absolute w-full right-0 left-0">
                        {isConger(day.date)}
                      </div>
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
