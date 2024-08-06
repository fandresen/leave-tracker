import { propsT } from '@/lib/interface';
import { dateToYMDString, numberToMonth } from '@/lib/others';
import { GrNext, GrPrevious } from 'react-icons/gr';

export const WeeklyCalendar = ({
  calendarData,
  nextMonth,
  prevMonth,
  toDayDate,
  handleDayClick,
  isConger,
  isPastDate,
}: propsT) => {
    const today = new Date().toString();
  const daysPerWeek = 7;

  const weeks = [];
  if (calendarData && Array.isArray(calendarData.calendarDays)) {
    const totalDays = calendarData.calendarDays.length;
    for (let i = 0; i < totalDays; i += daysPerWeek) {
      const week = calendarData.calendarDays.slice(i, i + daysPerWeek);
      weeks.push(week);
    }
  }

  const currentWeek = weeks[0] || []; // Assuming we display the first week for simplicity

  return (
    <>
      <div className="flex gap-5 mb-5">
        <div className="flex">
          <button
            className="mx-10 text-lg px-3 border-[3px] border-sky-300 hover:bg-sky-300 hover:text-white rounded-xl"
            onClick={toDayDate}
          >
            Today
          </button>
          <button onClick={prevMonth}>
            <GrPrevious className="mt-1 mr-2 text-black" />
          </button>
          <button onClick={nextMonth}>
            <GrNext className="mt-1 ml-2 text-black" />
          </button>
        </div>
        <div className="mt-3 text-sm 2xl:text-2xl font-semibold text-[#333]">
          {numberToMonth(calendarData.month)} {calendarData.year}
        </div>
      </div>

      <div>
        <table className="w-full h-[70vh] border border-gray-200 bg-white">
          <thead>
            <tr className="text-center font-normal text-black">
              <th className="w-[5%] text-sm 2xl:text-lg">Heure</th>
              <th className="py-2 2xl:py-4 w-[13.5%] text-sm 2xl:text-ls border border-gray-100">
                Dimanche
              </th>
              <th className=" w-[13.5%] text-sm 2xl:text-lg" >Lundi</th>
              <th className=" w-[13.5%] text-sm 2xl:text-lg">Mardi</th>
              <th className=" w-[13.5%] text-sm 2xl:text-lg">Mercredi</th>
              <th className=" w-[13.5%] text-sm 2xl:text-lg">Jeudi</th>
              <th className=" w-[13.5%] text-sm 2xl:text-lg">Vendredi</th>
              <th className=" w-[13.5%] text-sm 2xl:text-lg">Samedi</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 24 }, (_, hour) => (
              <tr key={hour} className="h-32">
                <td className="flex items-center justify-center">{hour.toString().padStart(2, '0')}:00</td>
                {currentWeek.map((day) => (
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
                    <div className="absolute w-full right-0 left-0">{isConger(day.date)}</div>
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

export default WeeklyCalendar;
